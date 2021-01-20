/*
 * @Author: xujintai
 * @Date: 2021-01-20 12:55:56
 * @LastEditors: xujintai
 * @LastEditTime: 2021-01-20 22:46:20
 * @Description: file content
 * @FilePath: \CoreCode\vue源码\数据侦测\defineReactive.js
 */

 function defineReactive(target, key, val) {
  if (arguments.length === 2) {
    val=target[key]
   }
   
   observe(val)

  Object.defineProperty(target, key, {
    get() {
      console.log('get:'+key+'属性被读取了');
      return val
    },
    set(newValue) {
      console.log('set:'+key+'属性被改变了');
      if (val === newValue) {
        return
      }
      val = newValue
      observe(val)
    }
  })
}