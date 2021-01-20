/*
 * @Author: xujintai
 * @Date: 2020-12-09 10:00:40
 * @LastEditors: xujintai
 * @LastEditTime: 2020-12-09 10:27:20
 * @Description: 文件说明
 */
var obj = { name: 'Smiley' };
var greeting = function (str, lang) {
  this.value = 'greetingValue';
  console.log('Welcome ' + this.name + ' to ' + str + ' in ' + lang);
};
var objGreeting = greeting.bind(obj, 'the world');

console.log(objGreeting);
objGreeting('JS');

Function.prototype.MyBind = function () {
  var thatFunc = this;
  //传入的第一个参数即obj
  thatArg = arguments[0];
  //var args = [...arguments].slice(1);
  var args = Array.prototype.slice.call(arguments, 1);
  //判断thatFunc是否函数
  if (typeof thatFunc !== 'function') {
    throw new TypeError(
      'Function.prototype.bind - ' +
        'what is trying to be bound is not callable'
    );
  }
  return function () {
    var funcArgs = args.concat(Array.prototype.slice.call(arguments));
    return thatFunc.apply(thatArg, funcArgs);
  };
};
