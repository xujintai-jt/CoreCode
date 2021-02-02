/*
 * @Author: xujintai
 * @Date: 2021-01-31 20:45:35
 * @LastEditors: xujintai
 * @LastEditTime: 2021-02-02 17:11:04
 * @Description: file content
 * @FilePath: \CoreCode\ES6\Promise\Promise_2021.1.31.js
 */

// new Promise((resolve, reject) => {
//   resolve()
// })
//   .then(resolve => {
// })
//   .catch(resolve => {
// },reject=>{})

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
      console.log('执行器函数捕获错误：',error);
      reject(error)
    }
  }

  MyPromise.prototype.then = function (onResolved, onRejected) {

  // //向后传递成功的value
  // onRejected =
  // typeof onResolved === 'function' ? onResolved : (value) => value;
  
  // //如果未指失败的回调函数,则默认指定失败回调函数（实现异常穿透的关键点）
  // onRejected =
  //   typeof onRejected === 'function'
  //     ? onRejected
  //     : (reason) => {
  //       throw reason;
  //     };
     
    if (typeof onResolved !== "function") {
     onResolved = value=>value
    }
  
    if (typeof onRejected !== "function") {
      onRejected = function (reason) {
        throw reason
      }
    }
    
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
  
  //catch是特殊的then方法,当成功状态的promise调用catch方法时,catch不进行后处理而是交给之后的then方法处理。
  //(相当于catch指定了处理成功状态promise的回调函数将成功状态promise继续下传)
  MyPromise.prototype.catch=function (onResolved,onRejected) {
  return  this.then(undefined,onRejected)
  }
  window.MyPromise=MyPromise
})(window)