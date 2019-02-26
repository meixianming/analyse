<template>
  <div>
    <h1>vue</h1>
    <el-row>
      <router-link to="communication">通信</router-link>
      <router-link to="slotmixins">slot/mixins</router-link>
      <router-link to="lifecycle">生命周期</router-link>
      <router-link to="Vdom">虚拟DOM</router-link>
    </el-row>
    <router-view></router-view>
  </div>
</template>
<script>
  export default {
    name: "VueIndex"
  };
</script>