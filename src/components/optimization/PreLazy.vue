<template>
  <div>
    <el-tabs v-model="activeName">
      <el-tab-pane label="预加载"
                   name="first">
        <pre-load />
      </el-tab-pane>
      <el-tab-pane label="懒加载"
                   name="second">
        <lazy-load />
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
  import PreLoad from "./PreLoad";
  import LazyLoad from "./LazyLoad";
  export default {
    name: "PreLazy",
    components: { PreLoad, LazyLoad },
    data() {
      return {
        activeName: "first"
      };
    }
  };
</script>