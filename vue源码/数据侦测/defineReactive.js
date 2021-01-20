/*
 * @Author: xujintai
 * @Date: 2021-01-20 12:55:56
 * @LastEditors: xujintai
 * @LastEditTime: 2021-01-20 16:21:20
 * @Description: file content
 * @FilePath: \Vue3\test\defineReactive.js
 */

export default function defineReactive(target, key, val) {
  if (arguments.length === 2) {
    val=target[key]
  }
  Object.defineProperty(target, key, {
    get() {
      console.log('get:name属性被读取了');
      return val
    },
    set(newValue) {
      console.log('set:name属性被改变了');
      if (val === newValue) {
        return
      }
      val = newValue
    }
  })
}