<template>
  <div>
    <h1>Layout</h1>
    <el-row>
      <router-link to="grail">grail</router-link>
      <router-link to="double-wings">double wings</router-link>
    </el-row>
    <router-view></router-view>
  </div>
</template>
<script>
  export default {
    name: "LayoutIndex"
  };
</script>