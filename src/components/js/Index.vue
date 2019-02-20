<template>
  <div>
    <h1>Javascript</h1>
    <el-row>
      <router-link to="this">this相关</router-link>
      <router-link to="throttleDebounce">函数节流、防抖</router-link>
    </el-row>
    <router-view></router-view>
  </div>
</template>
<script>
  export default {
    name: "JsIndex"
  };
</script>