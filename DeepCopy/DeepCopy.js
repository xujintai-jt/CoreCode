/*
 * @Author: xujintai
 * @Date: 2020-12-07 20:39:19
 * @LastEditors: xujintai
 * @LastEditTime: 2020-12-08 13:35:01
 * @Description: file content
 * @FilePath: \CoreCode\DeepCopy\DeepCopy.js
 */
let obj = {
  a: {
    aa: 'aa'
  },
  arr: ['q', {
    b: {
      bb: 'bb'
    }
  }]
}

let arr = ['q', {
  b: {
    bb: 'bb'
  }
}]


function DeepClone(copied, copyer) {
  //第一次进入时判断copied类型
  var res = (copied instanceof Array) ? [] : {}
  copyer = copyer || res
  for (var key in copied) {
    if (typeof copied[key] == 'object') {
      copyer[key] = (copied[key] instanceof Array) ? [] : {}
      DeepClone(copied[key], copyer[key])
    } else {
      copyer[key] = copied[key]
    }
  }
  return copyer
}


var objClone = DeepClone(obj)
console.log(objClone);
console.log(objClone === obj);


var arrClone = DeepClone(arr)
console.log(arrClone === arr);
console.log(arrClone);