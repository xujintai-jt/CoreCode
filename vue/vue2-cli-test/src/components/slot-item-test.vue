<!--
 * @Author: xujintai
 * @Date: 2021-01-22 20:04:24
 * @LastEditors: xujintai
 * @LastEditTime: 2021-01-22 22:17:48
 * @Description: file content
 * @FilePath: \CoreCode\vue\vue2-cli-test\src\components\slot-item-test.vue
-->
<template>
  <div id="slot-item-test">
    <h2>slot-item-test start</h2>
    <slot name="center" :item="item" :msg="msg"></slot>
    <h1>-------------------</h1>
    <slot :item="item"></slot>
    <h2>slot-item-test end</h2>
  </div>
</template>

<script>
export default {
  data() {
    return {
      item: "item-item",
      msg: "hahaha",
    };
  },
};
</script>

<style>
</style>