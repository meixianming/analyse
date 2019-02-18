<template>
  <div>
    <h1>vue</h1>
    <el-row>
      <router-link to="communication">通信</router-link>
      <router-link to="slotmixins">slot/mixins</router-link>
    </el-row>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: "VueIndex"
  };
</script>