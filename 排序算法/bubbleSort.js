/*
 * @Author: xujintai
 * @Date: 2020-12-08 12:27:42
 * @LastEditors: xujintai
 * @LastEditTime: 2020-12-08 13:34:35
 * @Description: file content
 * @FilePath: \CoreCode\排序算法\BubbleSort.js
 */
function BubbleSort(array) {
  if (array.length <= 1) {
    return array
  }
  var temp = ''
  //外层for循环：需要冒泡次数
  for (var i = 0; i < array.length - 1; i++) {
    //内层for循环：进行冒泡高度(每增加冒泡一次，冒泡高度降低1)
    for (var j = 0; j < array.length - 1 - i; j++) {
      if (array[j + 1] < array[j]) {
        temp = array[j + 1]
        array[j + 1] = array[j]
        array[j] = temp
      }
    }
  }

  return array
}

console.log(BubbleSort([8, 1, 9, 6, 5, 2, 1, 7]));