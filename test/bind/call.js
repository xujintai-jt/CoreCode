/*
 * @Author: xujintai
 * @Date: 2020-12-09 09:26:04
 * @LastEditors: xujintai
 * @LastEditTime: 2020-12-09 09:54:51
 * @Description: 文件说明
 */
const obj1 = {
  name: 'obj1',
  fn1(args) {
    console.log('this:', this);
    console.log('传入形参:', args);
    console.log('arguments:', arguments);
    return 99;
  },
};

const obj2 = {
  name: 'obj2',
};

Function.prototype.MyCall = function (obj) {
  let randomName = Math.random() + 'oo';
  while (obj1.hasOwnProperty(randomName)) {
    randomName += 'oo';
  }
  var result = null;
  let args = [...arguments].slice(1);
  obj = obj || window;
  obj[randomName] = this;
  result = obj[randomName](...args);
  delete obj[randomName];
  return result;
};

obj1.fn1.MyCall(obj2, 1, 2);
console.log(obj2);
console.log(obj1.fn1.MyCall(obj2, 1, 2););
