/*
 * @Author: xujintai
 * @Date: 2021-01-20 17:11:17
 * @LastEditors: xujintai
 * @LastEditTime: 2021-01-20 18:11:53
 * @Description: file content
 * @FilePath: \CoreCode\vue源码\数据侦测\Observe.js
 */

function observe(value) {
  if (typeof value !== 'object') {
     return
  }
   //定义ob
  var ob
  if ( value.__ob__ === undefined) {
    ob = new Observer(value)
  } else {
    ob = value.__ob__
  }
  return ob
 }