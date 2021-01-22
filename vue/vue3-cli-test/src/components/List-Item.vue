<!--
 * @Author: xujintai
 * @Date: 2021-01-22 15:34:23
 * @LastEditors: xujintai
 * @LastEditTime: 2021-01-22 17:05:34
 * @Description: file content
 * @FilePath: \CoreCode\vue\vue3-cli-test\src\components\List-Item.vue
-->
<template>
  <div>
    <h1>ListItem</h1>
    <ul>
      <li>id:{{ student.id}}</li>
      <li>name:{{ student.name}}</li>
      <li>age:{{ student.age}}</li>
    </ul>
    <h3>propsId</h3>
    <div>{{id}}</div>
    <button @click="changeName">changeName</button>
    <button @click="changeId">changeId</button>
  </div>
</template>

<script>
export default {
  props: {
    student: {
      type: Object,
      default() {
        return {};
      },
    },
    id: {
      type: Number,
      default: null,
    },
  },
  methods: {
    changeName() {
      //vue3中 子组件修改props（基本类型）会报错
      this.student.name = "666";
      // this.$parent.changeName(this.student);
    },
    changeId() {
      //vue3中 子组件修改props（基本类型）会报错
      // this.id = 999;
    },
  },
};
</script>

<style lang="scss" scoped>
</style>