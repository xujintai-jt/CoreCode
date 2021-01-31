/*
 * @Author: xujintai
 * @Date: 2021-01-31 20:45:35
 * @LastEditors: xujintai
 * @LastEditTime: 2021-01-31 22:12:19
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
    this.storyFn = []
    this.result = null
    
    function resolve(value) {
      if (self.status !== PENDING)  return
    
      console.log('resolve函数');
      self.status = RESOLVED
      self.result = value
      if (self.storyFn.length > 0) {
        setTimeout(() => {
          
        },0)
      }
    }

    function reject(reason) {
      if (self.status !== PENDING)  return
      console.log('reject函数');
      self.status = REJECTED
      self.result = reason
      if (self.storyFn.length > 0) {
        setTimeout(() => {
          
        },0)
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

  MyPromise.prototype.then = function (resolved,rejected) {
    const self = this
    console.log(self);
    if (self.status === RESOLVED) {
      setTimeout(() => {
        resolved(self.result)
    },0)
    } else if(self.status === REJECTED) {
      setTimeout(() => {
        rejected(self.result)
    },0)
    }
  }
  
  window.MyPromise=MyPromise
})(window)