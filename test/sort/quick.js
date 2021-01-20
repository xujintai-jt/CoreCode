/*
 * @Author: xujintai
 * @Date: 2020-12-09 14:24:24
 * @LastEditors: xujintai
 * @LastEditTime: 2020-12-09 15:05:17
 * @Description: 文件说明
 */
function quickSort(array) {
  if (array.length <= 1) {
    return array;
  }
  //选取参照(中心)
  var pivotIndex = Math.floor(array.length / 2);
  //array中查找出并在array中去除参照元素
  var pivotValue = array.splice(pivotIndex, 1)[0];
  let right = [];
  let left = [];
  for (var i = 0; i < array.length; i++) {
    if (array[i] < pivotValue) {
      left.push(array[i]);
    } else {
      right.push(array[i]);
    }
  }

  return quickSort(left).concat(pivotValue, quickSort(right));
}

console.log(quickSort([9, 1, 8, 6, 5, 3, 4, 2, 1]));
