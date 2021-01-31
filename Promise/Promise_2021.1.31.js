/*
 * @Author: xujintai
 * @Date: 2021-01-31 20:45:35
 * @LastEditors: xujintai
 * @LastEditTime: 2021-01-31 20:51:47
 * @Description: file content
 * @FilePath: \CoreCode\Promise\Promise_2021.1.31.js
 */

// new Promsie((resolve, reject) => {
  // resolve()
// })
(() => {
  const PENDING='pending'
  function Promsie(excutor) {
    this.status = PENDING
    this.storyFn = []
    
    function resolve(){
  
    }

    try {
      excutor()
    }
    catch(error) {
      reject(error)
    }
  }
  
})()