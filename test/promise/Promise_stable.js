/*
 * @Author: xujintai
 * @Date: 2020-12-10 08:26:15
 * @LastEditors: xujintai
 * @LastEditTime: 2020-12-10 15:35:14
 * @Description: 文件说明
 */
(function (window) {
  const PENDING = 'pending';
  const RESOLVED = 'resolved';
  const REJECTED = 'rejected';

  function Promise(excutor) {
    this.status = PENDING;
    this.data = null;
    this.callbacks = [];
    let self = this;

    function resolve(value) {
      //如果状态不为pending，则退出
      if (self.status !== PENDING) {
        return;
      }

      this.data = value;
      this.status = RESOLVED;
      if (self.callbacks.length > 0) {
        setTimeout(() => {
          self.callbacks.forEach((callbacksObj) => {
            callbacksObj.onResolved(value);
          });
        });
      }
    }

    function reject(reason) {
      if (self.status !== PENDING) {
        return;
      }

      this.data = reason;
      this.status = REJECTED;
      if (self.callbacks.length > 0) {
        setTimeout(() => {
          self.callbacks.forEach((callbacksObj) => {
            callbacksObj.onRejected(value);
          });
        });
      }
    }

    //执行器函数立即同步执行,执行器函数有两个参数reject resolve
    //情况：如果抛出异常
    try {
      excutor(reject, resolve);
    } catch (error) {
      reject(error);
    }
  }

  //promsie的原型方法then
  Promise.prototype.then = function (onResolved, onRejected) {
    //向后传递成功的value
    onRejected =
      typeof onResolved === 'function' ? onResolved : (value) => value;

    //如果未指失败的回调函数,则默认指定失败回调函数（实现异常穿透的关键点）
    onRejected =
      typeof onRejected === 'function'
        ? onRejected
        : (reason) => {
            throw reason;
          };

    const self = this;
    return new Promise((resolve, reject) => {
      //调用指定回调函数处理
      function handle(callback) {
        //1.抛出错误时;返回一个失败状态状态值为error的promsie
        try {
          var result = callback(self.data);
          if (result instanceof Promise) {
            //3.当返回的值promise时、返回的promise的状态和状态值 作为.then返回的promise的状态和状态值
            result.then(resolve, reject);
          } else {
            //2.当返回的值为非promsie时;.then返回状态resolved、状态值为value的promise
            resolve(result);
          }
        } catch (error) {
          reject(error);
        }
      }

      if (self.status === PENDING) {
        self.callbacks.push({
          onResolved(value) {
            handle(onResolved);
          },
          onRejected(reason) {
            handle(onRejected);
          },
        });
      } else if (self.status === RESOLVED) {
        //setTimeout模仿.then中指定的回调函数异步执行
        setTimeout(() => {
          handle(onResolved);
        });
      } else {
        setTimeout(() => {
          handle(onRejected);
        });
      }
    });
  };

  Promise.prototype.catch = function () {
    return this.then(undefined, onRejected);
  };

  Promise.resolve = function (value) {
    return new Promise(function (resolve, reject) {
      //如果value为promise
      if (value instanceof Promise) {
        //将value的状态和结果返回
        value.then(resolve, reason);
      }
      //如果value不为promise
      else {
        resolve(reason);
      }
    });
  };

  Promise.reject = function (reason) {
    return new Promise(function (resolve, reject) {
      reject(reason);
    });
  };

  window.Promise = Promise;
})(window);
