/*
 * @Author: xujintai
 * @Date: 2020-12-08 12:27:42
 * @LastEditors: xujintai
 * @LastEditTime: 2020-12-21 14:05:01
 * @Description: file content
 * @FilePath: \CoreCode\排序算法\bubbleSort.js
 */
// function BubbleSort(array) {
//   if (array.length <= 1) {
//     return array
//   }
//   var temp = ''
//   //外层for循环：需要冒泡次数
//   for (var i = 0; i < array.length - 1; i++) {
//     //内层for循环：进行冒泡高度(每增加冒泡一次，冒泡高度降低1)
//     for (var j = 0; j < array.length - 1 - i; j++) {
//       if (array[j + 1] < array[j]) {
//         temp = array[j + 1]
//         array[j + 1] = array[j]
//         array[j] = temp
//       }
//     }
//   }

//   return array
// }

// console.log(BubbleSort([8, 1, 9, 6, 5, 2, 1, 7]));


function BubbleSort(arr) {
  if (arr.length < 2) {
    return arr
  }

  let length = arr.length
  let temp=''
  for (var i = 0; i < length - 1;i++){
    for (var j = 0; j < length - 1 - i; j++){
      if (arr[j] > arr[j + 1]) {
        temp = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1]=temp
      }
    }
  }

  return arr
}

console.log(BubbleSort([8, 1, 9, 6, 5, 2, 1, 7]));


