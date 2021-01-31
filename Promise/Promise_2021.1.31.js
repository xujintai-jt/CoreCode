/*
 * @Author: xujintai
 * @Date: 2021-01-31 20:45:35
 * @LastEditors: xujintai
 * @LastEditTime: 2021-01-31 21:07:55
 * @Description: file content
 * @FilePath: \CoreCode\Promise\Promise_2021.1.31.js
 */

// new Promsie((resolve, reject) => {
  // resolve()
// })
(() => {
  const PENDING = 'pending'
  const RESOLVED = 'resolved'
  const REJECTED = 'rejected'
  
  function Promsie(excutor) {
    const self= this
    this.status = PENDING
    this.storyFn = []
    
    function resolve() {
      if(this.status!==PENDING) return
      self.status = RESOLVED
      if (self.storyFn.length > 0) {
        
      }
    }

    function reject() {
      if(this.status!==PENDING) return
      self.status = REJECTED
      if (self.storyFn.length > 0) {
        
      }
    }

    try {
      excutor()
    }
    catch(error) {
      reject(error)
    }
  }

  Promsie.prototype.then = function (resolved,rejected) {
    const self = this
    if (self.status === RESOLVED) {
      setTimeout(() => {
        resolved()
    },0)
    } else if(self.status === REJECTED) {
      setTimeout(() => {
        rejected()
    },0)
    }

    
  }
  
})()