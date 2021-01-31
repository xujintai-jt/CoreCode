/*
 * @Author: xujintai
 * @Date: 2021-01-31 20:45:35
 * @LastEditors: xujintai
 * @LastEditTime: 2021-01-31 22:25:00
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
          self.storyFn[0].onResolved(self.result)
        })
      }
    }

    function reject(reason) {
      if (self.status !== PENDING)  return
      console.log('reject函数');
      self.status = REJECTED
      self.result = reason
      if (self.storyFn.length > 0) {
        setTimeout(() => {
          self.storyFn[0].onRejected(self.result)
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

  MyPromise.prototype.then = function (onResolved,onRejected) {
    const self = this
    if (self.status === RESOLVED) {
      setTimeout(() => {
        onResolved(self.result)
    },0)
    } else if(self.status === REJECTED) {
      setTimeout(() => {
        onRejected(self.result)
    },0)
    } else {
      self.storyFn.push({onResolved,onRejected})
    }
  }
  
  window.MyPromise=MyPromise
})(window)