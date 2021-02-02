/*
 * @Author: xujintai
 * @Date: 2021-02-02 09:58:15
 * @LastEditors: xujintai
 * @LastEditTime: 2021-02-02 13:07:35
 * @Description: file content
 * @FilePath: \CoreCode\ES6\module\fs.js
 */
// 1.
// export var firstName = 'Michael';
// export var lastName = 'Jackson';
// export var year = 1958;

var firstName = 'Michael';
var lastName = 'Jackson';
var year = 1958;
export { firstName, lastName, year }

export default function () {
  console.log('i am export default');
}



