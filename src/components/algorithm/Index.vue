<template>
  <div>
    <h1>算法</h1>
    <el-tabs v-model="activeName">
      <el-tab-pane label="复杂度"
                   name="first">
        <complexity></complexity>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
  import Complexity from "./Complexity";
  export default {
    name: "Index",
    data() {
      return {
        activeName: "first"
      };
    },
    components: { Complexity }
  };
</script>