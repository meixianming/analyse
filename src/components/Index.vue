<style scoped>
  button {
    margin: 10px 0px;
  }
</style>

<template>
  <el-row>
    <el-button type="primary">
      <router-link to="/Login">登录页</router-link>
    </el-button>
    <el-button type="primary">
      <router-link to="/async">异步函数</router-link>
    </el-button>
    <el-button type="primary">
      <router-link to="/pattern">设计模式</router-link>
    </el-button>
    <el-button type="primary">
      <router-link to="/vue">vue</router-link>
    </el-button>
    <el-button type="primary">
      <router-link to="/js">js</router-link>
    </el-button>
    <el-button type="primary">
      <router-link to="/algorithm">算法</router-link>
    </el-button>
    <el-button type="primary">
      <router-link to="/css3">css3</router-link>
    </el-button>
    <el-button type="primary">
      <router-link to="/html5">HTML5</router-link>
    </el-button>
    <el-button type="primary">
      <router-link to="/layout">layout</router-link>
    </el-button>
  </el-row>
</template>

<script>
  export default {
    name: "Index"
  };
</script>

