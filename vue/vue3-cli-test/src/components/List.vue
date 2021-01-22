<!--
 * @Author: xujintai
 * @Date: 2021-01-22 15:34:10
 * @LastEditors: xujintai
 * @LastEditTime: 2021-01-22 17:07:29
 * @Description: file content
 * @FilePath: \CoreCode\vue\vue3-cli-test\src\components\List.vue
-->
<template>
  <div>
    <h1>List页面</h1>
    <router-link to="/">toHome</router-link>
    <h1>------------------------------List------------------------------------</h1>
    <div v-for="item in students" :key="item.id">
      <span>{{item.name}}</span>
      <button @click="changeName(item)">changeName</button>
      <h3>propsId</h3>
      <div>{{item.id}}</div>
    </div>

    <h1>------------------------------ListItem------------------------------------</h1>
    <list-item v-for="item in students" :key="item.id" :student="item" :id="item.id" />
  </div>
</template>

<script>
import ListItem from "./List-Item";
export default {
  data() {
    return {
      students: [
        { id: 1, name: "xjt", age: 22 },
        { id: 2, name: "wwf", age: 21 },
      ],
    };
  },
  components: {
    ListItem,
  },
  methods: {
    changeName(item) {
      item.name = "666";
    },
  },
};
</script>

<style lang="scss" scoped>
</style>