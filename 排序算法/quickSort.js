/*
 * @Author: xujintai
 * @Date: 2020-12-08 12:24:41
 * @LastEditors: xujintai
 * @LastEditTime: 2020-12-21 14:15:40
 * @Description: file content
 * @FilePath: \CoreCode\排序算法\quickSort.js
 */
// function quickSort(array) {
//   //1.结束递归的条件
//   if (array.length <= 1) {
//     return array
//   }

//   //2.设置基准
//   let pivotIndex = Math.floor(array.length / 2)
//   //3.获取基准值并且将基准从array中去除
//   let pivotValue = array.splice(pivotIndex, 1)[0]
//   let left = []
//   let right = []
//   for (var i = 0; i < array.length; i++) {
//     if (array[i] < pivotValue) {
//       left.push(array[i])
//     } else {
//       right.push(array[i])
//     }
//   }
//   //4.递归调用
//   // return quickSort(left).concat(pivotValue, quickSort(right))
//   return arguments.callee(left).concat(pivotValue, arguments.callee(right))
// }

// console.log(quickSort([8, 1, 9, 6, 5, 2, 1, 7, -2]));



function quickSort(arr) {
  if (arr.length < 2) {
    return arr
  }

  let Index = Math.floor(arr.length / 2)
  let Item = arr.splice(Index, 1)
  let right = []
  let left = []
  
  arr.forEach(item => {
    if (item < Item) {
      left.push(item)
    }
    else {
      right.push(item)
    }
  })

  return quickSort(left).concat(Item,quickSort(right))
}

console.log(quickSort([8, 1, 9, 6, 5, 2, 1, 7, -2, 90, -99]));



