<!--
 * @Author: xujintai
 * @Date: 2021-01-22 16:06:21
 * @LastEditors: xujintai
 * @LastEditTime: 2021-01-22 20:02:31
 * @Description: file content
 * @FilePath: \CoreCode\vue\vue2-cli-test\src\views\Home.vue
-->
<template>
  <div class="home">
    <h1>Home页面</h1>
    <div>
      <router-link to="/List">toList</router-link>
    </div>

    <router-link to="/slot-test">to slot-test</router-link>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
};
</script>
