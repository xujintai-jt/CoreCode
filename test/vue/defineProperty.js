/*
 * @Author: xujintai
 * @Date: 2020-12-09 08:48:30
 * @LastEditors: xujintai
 * @LastEditTime: 2020-12-09 08:59:48
 * @Description: 文件说明
 */
let obj = {
  count: 1,
  FirstName: "金泰",
  LastName: "许"
};
Object.defineProperty(obj, "FullName", {
  get() {
    return obj.LastName + " " + obj.FirstName;
  },
  set(newValue) {
    let arr = newValue.split(" ");
    obj.FirstName = arr[1];
    obj.LastName = arr[0];
  }
});

obj.FirstName = "王丰";
obj.LastName = "韦";
console.log(obj.FullName);
obj.FullName = "万 春辉";
console.log(obj.FirstName);
console.log(obj.LastName);
