<!--
 * @Author: xujintai
 * @Date: 2021-01-22 15:34:23
 * @LastEditors: xujintai
 * @LastEditTime: 2021-01-22 16:01:54
 * @Description: file content
 * @FilePath: \CoreCode\vue\vue-cli-test\src\components\List-Item.vue
-->
<template>
  <div>
    <h1>ListItem</h1>
    <ul>
      <li>id:{{ student.id}}</li>
      <li>name:{{ student.name}}</li>
      <li>age:{{ student.age}}</li>
    </ul>
    <button @click="changeName">changeName</button>
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
  },
  methods: {
    //vue3中 子组件直接修改props会报错
    changeName() {
      // this.student.name = "666";
      this.$parent.changeName(this.student);
    },
  },
};
</script>

<style lang="scss" scoped>
</style>