<!--
 * @Author: xujintai
 * @Date: 2021-01-22 16:06:21
 * @LastEditors: xujintai
 * @LastEditTime: 2021-01-22 22:39:54
 * @Description: file content
 * @FilePath: \CoreCode\vue\vue2-cli-test\src\App.vue
-->
<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  data() {
    return { name: "App根组件" };
  },
  created() {
    console.log(this.name);
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
