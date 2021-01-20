/*
 * @Author: xujintai
 * @Date: 2021-01-20 17:10:20
 * @LastEditors: xujintai
 * @LastEditTime: 2021-01-20 22:51:25
 * @Description: file content
 * @FilePath: \CoreCode\vue源码\数据侦测\Observer.js
 */
class Observer {
  constructor(value) {
    var self=this
    Object.defineProperty(value, '__ob__', {
      //这里如果不进行value赋值,即value为undefined
      value:self,
      enumerable:false
    })
    this.walk(value)
  }

  walk(value) {
    for (var key in value) {
      defineReactive(value,key)
    }
  }
}