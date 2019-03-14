<template>
  <div>
    <h1>CSS3</h1>
    <el-row>
      <router-link to="transition">transition</router-link>
      <router-link to="transform">transform</router-link>
      <router-link to="animation">animation</router-link>
      <router-link to="border">border</router-link>
      <router-link to="background">background</router-link>
      <router-link to="column">column</router-link>
      <router-link to="grid">栅格</router-link>
      <router-link to="flex">flex</router-link>
    </el-row>
    <router-view></router-view>
  </div>
</template>
<script>
  export default {
    name: "CSSIndex"
  };
</script>