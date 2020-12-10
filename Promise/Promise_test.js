/*
 * @Author: xujintai
 * @Date: 2020-12-09 20:28:22
 * @LastEditors: xujintai
 * @LastEditTime: 2020-12-10 22:11:38
 * @Description: file content
 * @FilePath: \CoreCode\Promise\Promise_test.js
 */

(function (window) {
  const PENDING = 'pending'
  const RESOLVED = 'resolved'
  const REJECTED = 'rejected'
  //promise函数对象
  function Promise(excutor) {
    this.state = PENDING
    this.data = null
    this.callbacks = []
    //将实例对象保存为self
    const self = this

    function resolve(value) {
      if (self.state !== PENDING) {
        return
      }

      self.data = value
      self.status = RESOLVED;
      if (self.callbacks.length > 0) {
        setTimeout(() => {
          //状态成功，调用this中指定的回调函数
          self.callbacks.forEach(callbacksObj => {
            callbacksObj.onResolved(value)
          })
        }, 100)
      }
    }

    function reject(reason) {
      if (self.state !== PENDING) {
        return
      }

      self.status = REJECTED
      self.data = reason
      if (self.callbacks.length > 0) {
        setTimeout(() => {
          //状态成功，调用this中指定的回调函数
          self.callbacks.forEach(callbacksObj => {
            callbacksObj.onRejected(reason)
          })
        }, 100)
      }
    }

    //执行器函数立即执行
    try {
      excutor(resolve, reject)
    } catch (error) {
      reject(error)
    };

  }

  //Promise原型对象的方法
  Promise.prototype.then = function (onResolved, onRejected) {
    const self = this
    //返回新的promise实例：状态？状态值？
    return new Promise((resolve, reject) => {
      function handle(callback) {
        //1.then指定的回调函数执行是否抛出异常，then方法返回状态rejected、值为error的新promise实例
        try {
          let result = callback(self.data)
          //2.then指定的回调函数的返回结果为promise实例,返回的promsie状态状态值作为then方法返回的新promise的状态状态值
          if (result instanceof Promise) {
            result.then(resolve, reject)
          } else {
            //3.then指定的回调函数的返回结果不为promise实例，then方法返回状态为resolved、值为返回结果的新prosmie
            resolve(result)
          }
        } catch (error) {
          reject(error)
        }
      }

      //先指定回调函数，后改变状态 this.status === PENDING
      if (self.status === PENDING) {
        self.callbacks.push({
          onResolved() {
            handle(onResolved);
          },
          onRejected() {
            handle(onRejected)
          }
        })
      } else if (self.status === RESOLVED) {
        //模仿异步执行then中的回调函数
        setTimeout(() => {
          handle(onResolved)
        })
      } else {
        setTimeout(() => {
          handle(onRejected)
        })
      }
    })
  }

  Promise.prototype.catch = function (onRejected) {

  }

  //Promise函数对象的方法
  Promise.resolve = function (value) {

  }

  Promise.reject = function (reason) {

  }

  Promise.all = function (promises) {

  }

  Promise.race = function (promises) {

  }












  window.Promise = Promise

}(window))