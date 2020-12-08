/*
 * @Author: xujintai
 * @Date: 2020-12-07 20:35:20
 * @LastEditors: xujintai
 * @LastEditTime: 2020-12-08 13:34:22
 * @Description: file content
 * @FilePath: \CoreCode\Call\call.js
 */
name = "Window"
var Obj1 = {
  name: 'Obj1',
  fn(x) {
    console.log('i am fn of Obj1; 但是现在被' + this.name + '调用啦');
    console.log('实参x为:', x);
    console.log('arguments为:', arguments);
    console.log('当前this指向:', this);
    return 99
  }
}

var Obj2 = {
  name: 'Obj2',
}

//防止MyCall内copy的函数命名与obj的原有方法属性名冲突，使用随机生成数命名
Function.prototype.MyCall = function (obj) {
  var UniqueId = '00' + Math.random()
  while (obj.hasOwnProperty(UniqueId)) {
    UniqueId += '00'
  }
  obj = obj || window
  obj[UniqueId] = this
  let result = obj[UniqueId](...[...arguments].slice(1))
  delete obj[UniqueId]
  return result
}

Obj1.fn.MyCall(Obj2, 1, 111111)
console.log(Obj2);