<template>
  <div v-show="value">
    <div>
      <p>这是一个Model框</p>
      <el-button type="primary"
                 @click="close">关闭model</el-button>
    </div>
  </div>
</template>
<script>
  export default {
    name: "VmodelChild",
    props: ["value"],
    methods: {
      close() {
        this.$emit("input", false);
      }
    }
  };
</script>