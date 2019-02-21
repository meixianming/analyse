<template>
  <div>
    <h1>优化</h1>
    <el-row>
      <router-link to="prelazy">图片预加载/懒加载</router-link>
    </el-row>
    <router-view></router-view>
  </div>
</template>
<script>
  export default {
    name: "Optimization"
  };
</script>