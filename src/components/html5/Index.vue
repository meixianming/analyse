<template>
  <div>
    <h1>HTML5</h1>
    <el-row>
      <router-link to="canvas">canvas</router-link>
    </el-row>
    <router-view></router-view>
  </div>
</template>
<script>
  export default {
    name: "HtmlIndex"
  };
</script>