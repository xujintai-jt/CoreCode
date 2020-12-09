/*
 * @Author: xujintai
 * @Date: 2020-12-07 20:38:53
 * @LastEditors: xujintai
 * @LastEditTime: 2020-12-09 19:51:31
 * @Description: file content
 * @FilePath: \CoreCode\Promise\Promise.js
 */
// 自定义Promise函数模块:IIFE
(function (window) {
  let self;
  //MyPromise构造函数
  function MyPromise(excutor) {
    this.status = 'pending';
    this.data = undefined;
    this.callbacks = [];
    self = this;

    function resolve(value) {
      //如果当前状态不是pending，直接结束
      if (self.status !== 'pending') {
        return;
      }

      self.data = value;
      self.status = 'resolved';
      if (self.callbacks.length > 0) {
        setTimeout(() => {
          self.callbacks.forEach((callbacksObj) => {
            callbacksObj.onResolved(value);
          });
        });
      }
    }

    function reject(reason) {
      //如果当前状态不是pending，直接结束
      if (self.status !== 'pending') {
        return;
      }

      self.data = reason;
      self.status = 'rejected';
      if (self.callbacks.length > 0) {
        setTimeout(() => {
          self.callbacks.forEach((callbacksObj) => {
            callbacksObj.onRejected(reason);
          });
        });
      }
    }

    //立即同步执行excutor函数
    try {
      //如果excutor抛出异常，promise状态变为rejected
      excutor(resolve, reject);
    } catch (error) {
      reject(error);
    }
  }

  //Promise原型对象的then()
  MyPromise.prototype.then = function (onResolved, onRejected) {
    self.callbacks.push({
      onResolved,
      onRejected
    });
  };

  //Promise原型对象的catch()
  MyPromise.prototype.catch = function (onRejected) {};

  //Promise函数对象的resolve方法
  MyPromise.resolve = function (value) {};

  //Promise函数对象的reject方法
  MyPromise.reject = function (reason) {};

  //Promise函数对象的All方法
  MyPromise.all = function (promises) {};

  //Promise函数对象的Race方法
  MyPromise.race = function (promises) {};

  //向外暴露MyPromise
  window.MyPromise = MyPromise;
})(window);