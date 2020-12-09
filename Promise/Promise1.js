/*
 * @Author: xujintai
 * @Date: 2020-12-09 20:28:22
 * @LastEditors: xujintai
 * @LastEditTime: 2020-12-09 21:14:46
 * @Description: file content
 * @FilePath: \CoreCode\Promise\Promise1.js
 */

(function (window) {
  //promise函数对象
  function Promise(excutor) {
    this.state = "pending"
    this.data = null
    this.callbacks = []
    //将实例对象保存为self
    const self = this

    function resolve(value) {
      if (self.state !== 'pending') {
        return
      }

      self.data = value
      self.status = 'resolved';
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
      if (self.state !== 'pending') {
        return
      }

      self.status = 'rejected'
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
    // 将回调函数保存到callbacks(先指定回调函数)
    self.callbacks.push({
      onResolved,
      onRejected
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