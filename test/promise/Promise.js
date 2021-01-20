/*
 * @Author: xujintai
 * @Date: 2020-12-07 20:38:53
 * @LastEditors: xujintai
 * @LastEditTime: 2020-12-10 09:35:30
 * @Description: file content
 * @FilePath: \CoreCode\Promise\Promise.js
 */
// 自定义Promise函数模块:IIFE
(function (window) {
  const PENDING = 'pending';
  const RESOLVED = 'resolved';
  const REJECTED = 'rejected';

  //Promise构造函数
  function Promise(excutor) {
    this.status = PENDING;
    this.data = undefined;
    this.callbacks = [];
    //将实例对象保存为self
    const self = this;

    function resolve(value) {
      //如果当前状态不是pending，直接结束
      if (self.status !== PENDING) {
        return;
      }

      self.data = value;
      self.status = RESOLVED;
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
      if (self.status !== PENDING) {
        return;
      }

      self.data = reason;
      self.status = REJECTED;
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

  //Promise原型对象的then():then同步执行，将指定的异步回调函数保存到回调数组中
  Promise.prototype.then = function (onResolved, onRejected) {
    const self = this;
    return new Promise((reslove, reject) => {
      if (self.status === PENDING) {
        self.callbacks.push({
          onResolved,
          onRejected,
        });
      } else if (self.status === RESOLVED) {
        setTimeout(() => {
          //1.如果回调函数抛出异常，return失败状态、状态值为error的promise
          //2.如果回调函数返回结果不是Promise，return成功状态、状态值为return结果的promise（无return则状态值为undefined）
          //3.如果回调函数返回一个promise，则return状态和状态值为回调函数返回的promise的状态和状态值
          try {
            onResolved(self.data);
          } catch (error) {
            reject(error);
          }
        });
      } else {
        setTimeout(() => {
          onRejected(self.data);
        });
      }
    });
  };

  //Promise原型对象的catch()
  Promise.prototype.catch = function (onRejected) {};

  //Promise函数对象的resolve方法
  Promise.resolve = function (value) {};

  //Promise函数对象的reject方法
  Promise.reject = function (reason) {};

  //Promise函数对象的All方法
  Promise.all = function (promises) {};

  //Promise函数对象的Race方法
  Promise.race = function (promises) {};

  //向外暴露Promise
  window.Promise = Promise;
})(window);
