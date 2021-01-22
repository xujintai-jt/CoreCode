<!--
 * @Author: xujintai
 * @Date: 2021-01-22 15:34:23
 * @LastEditors: xujintai
 * @LastEditTime: 2021-01-22 18:19:33
 * @Description: file content
 * @FilePath: \CoreCode\vue\vue2-cli-test\src\components\List-Item.vue
-->
<template>
  <div>
    <h1>ListItem</h1>
    <h3>propsStudent</h3>
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
    //vue3中 子组件直接修改props会报错
    //vue2中 子组件修改props（引用类型）会影响父组件的数据
    changeName() {
      this.student.name = "666";
    },
    changeId() {
      //vue2中 子组件修改props（基本类型）不会影响父组件的数据
      this.id = 999;
    },
  },
};
</script>

<style lang="scss" scoped>
</style>