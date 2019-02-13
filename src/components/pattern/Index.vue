<template>
  <div>
    <h1>设计模式</h1>
    <el-tabs v-model="activeName">
      <el-tab-pane label="单例模式"
                   name="first">
        <single-ton></single-ton>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
  import SingleTon from "./SingleTon";
  export default {
    name: "Index",
    data() {
      return {
        activeName: "first"
      };
    },
    components: { SingleTon }
  };
</script>