/*
 * @Author: xujintai
 * @Date: 2020-12-08 16:24:16
 * @LastEditors: xujintai
 * @LastEditTime: 2020-12-08 16:34:46
 * @Description: file content
 * @FilePath: \CoreCode\vue源码\defineProperty\defineProperty.js
 */

var obj = {
  FirstName: 'A',
  LastName: 'B'
}

//get:回调函数，根据其它相关的属性动态计算得到当前属性值
//set:回调函数，监视当前属性值的变化，更新其它相关的属性值

Object.defineProperty(obj, 'FullName', {
  get() {
    return obj.FirstName + '-' + obj.LastName
  },
  set(newValue) {
    var arr = newValue.split('-')
    obj.FirstName = arr[0]
    obj.LastName = arr[1]
  }
})

obj.FullName = 'A1-B2'
console.log('obj.FirstName:', obj.FirstName);
console.log('obj.LastName:', obj.LastName);
console.log('obj.FullName:', obj.FullName);

obj.FirstName = 'C'
obj.LastName = 'D'
console.log('obj.FullName:', obj.FullName);