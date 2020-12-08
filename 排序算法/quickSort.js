function quickSort(array) {
  //1.结束递归的条件
  if (array.length <= 1) {
    return array
  }

  //2.设置基准
  let pivotIndex = Math.floor(array.length / 2)
  //3.获取基准值并且将基准从array中去除
  let pivotValue = array.splice(pivotIndex, 1)[0]
  let left = []
  let right = []
  for (var i = 0; i < array.length; i++) {
    if (array[i] < pivotValue) {
      left.push(array[i])
    } else {
      right.push(array[i])
    }
  }
  //4.递归调用
  // return quickSort(left).concat(pivotValue, quickSort(right))
  return arguments.callee(left).concat(pivotValue, arguments.callee(right))
}

console.log(quickSort([8, 1, 9, 6, 5, 2, 1, 7, -2]));