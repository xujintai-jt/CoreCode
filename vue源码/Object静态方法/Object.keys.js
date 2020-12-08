/*
 * @Author: xujintai
 * @Date: 2020-12-08 16:39:16
 * @LastEditors: xujintai
 * @LastEditTime: 2020-12-08 16:47:10
 * @Description: file content
 * @FilePath: \CoreCode\vue源码\Object静态方法\Object.keys.js
 */

const obj = {
  name: 'wwf',
  age: '21',
  sex: '男'
}

//Object.keys(obj) :得到对象自身可枚举属性组成的数组

Object.defineProperty(obj, 'weight', {
  //属性不可枚举
  enumerable: false,
  //可重新配置属性描述符
  configurable: true
})
const arr = Object.keys(obj)
console.log(arr); // ["name", "age", "sex"]



Object.defineProperty(obj, 'weight', {
  //属性可枚举
  enumerable: true
})
const arr2 = Object.keys(obj)
console.log(arr2); //["name", "age", "sex", "weight"]