<!--
 * @Author: xujintai
 * @Date: 2021-01-22 20:00:14
 * @LastEditors: xujintai
 * @LastEditTime: 2021-01-22 22:10:17
 * @Description: file content
 * @FilePath: \CoreCode\vue\vue2-cli-test\src\components\slot-test.vue
-->
<template>
  <div id="slot-test">
    <h1>slot-test</h1>
    <slot-item-test name="数据数据">
      <!-- 语法糖 -->
      <template #center="slotProps">{{'data1:'+data1}} {{'item:'+slotProps.item}}</template>
      <template #default="slotProps">{{'default:'+data1}} {{'item:'+slotProps.item}}</template>
      <!-- <template v-slot:center="slotProps">{{'data1:'+data1}} {{'item:'+slotProps.item}}</template>
      <template v-slot:default="slotProps">{{'default:'+data1}} {{'item:'+slotProps.item}}</template>-->
    </slot-item-test>
  </div>
</template>

<script>
import slotItemTest from "./slot-item-test";
export default {
  data() {
    return {
      data1: "数据1",
    };
  },
  components: {
    slotItemTest,
  },
};
</script>

<style>
</style>