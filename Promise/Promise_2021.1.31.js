/*
 * @Author: xujintai
 * @Date: 2021-01-31 20:45:35
 * @LastEditors: xujintai
 * @LastEditTime: 2021-02-01 13:30:36
 * @Description: file content
 * @FilePath: \CoreCode\Promise\Promise_2021.1.31.js
 */

// new Promise((resolve, reject) => {
  // resolve()
// })
(function(window){
  const PENDING = 'pending'
  const RESOLVED = 'resolved'
  const REJECTED = 'rejected'

  function MyPromise(excutor) {
    const self= this
    this.status = PENDING
    this.StoreCallbacks = []
    this.result = null
    
    function resolve(value) {
      if (self.status !== PENDING)  return
    
      console.log('resolve函数');
      self.status = RESOLVED
      self.result = value
      if (self.StoreCallbacks.length > 0) {
        setTimeout(() => {
          self.StoreCallbacks[0].Fn1(self.result)
        })
      }
    }

    function reject(reason) {
      if (self.status !== PENDING)  return
      console.log('reject函数');
      self.status = REJECTED
      self.result = reason
      if (self.StoreCallbacks.length > 0) {
        setTimeout(() => {
          self.StoreCallbacks[0].Fn2(self.result)
        })
      }
    }

    try {
      excutor(resolve,reject)
    }
    catch (error) {
      console.log(error);
      reject(error)
    }
  }

  MyPromise.prototype.then = function (onResolved, onRejected) {
    return new MyPromise((resolve, reject) => {
      const self = this
      function handle(callback) {
          try {
            //result为then方法指定的回调函数的返回结果
            const result = callback(self.result)
            //then方法的返回结果为Promise
            if (result instanceof MyPromise) {
            //根据then指定回调函数返回的promise的执行结果来决定then返回的promise的状态
               result.then(resolve,reject)
               } 
            //then方法的返回结果为非Promise
            else {
              resolve(result)
            }
          } catch (error) {
            reject(error)
          }
      }
      if (self.status === RESOLVED) {
        setTimeout(() => {
          handle(onResolved)
        })
      } else if(self.status === REJECTED) {
        setTimeout(() => {
          handle(onRejected)
        })
      } else {
        self.StoreCallbacks.push({
          Fn1(value) {
            handle(onResolved);
          },
          Fn2(reason) {
            handle(onRejected);
          },
        })
      }
    })
  }
  
  MyPromise.prototype.catch=function (onResolved,onRejected) {
    
  }
  window.MyPromise=MyPromise
})(window)