function selectSort(array) {
  if (array.length <= 1) {
    return array
  }
  var minIndex = ''
  var temp = ''
  // 外层for循环：循环次数
  for (var i = 0; i < array.length - 1; i++) {
    minIndex = i
    // 内层for循环：外层循环一次，内层比较次数减1
    for (var j = i + 1; j < array.length; j++) {
      if (array[minIndex] > array[j]) {
        minIndex = j
      }
    }
    temp = array[i]
    array[i] = array[minIndex]
    array[minIndex] = temp
  }

  return array
}

console.log(selectSort([8, 1, 9, 6, 5, 2, 1, 7]));