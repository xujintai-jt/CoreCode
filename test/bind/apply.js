/*
 * @Author: xujintai
 * @Date: 2020-12-09 09:44:01
 * @LastEditors: xujintai
 * @LastEditTime: 2020-12-09 09:53:20
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

Function.prototype.MyApply = function (obj, arr) {
  let randomName = Math.random() + 'oo';
  while (obj1.hasOwnProperty(randomName)) {
    // randomName += 'oo';
    randomName = Math.random() + 'oo';
  }
  obj = obj || window;
  obj[randomName] = this;
  var result = null;
  if (arr) {
    result = obj[randomName](...arr);
  } else {
    result = obj[randomName]();
  }
  delete obj[randomName];

  return result;
};

// obj1.fn1.MyApply(obj2, [1, 2]);
// console.log(obj2);
obj1.fn1.MyApply(obj2);
console.log(obj2);
