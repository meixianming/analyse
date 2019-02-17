<template>
  <div>
    <el-button type="primary"
               @click="addNum">父子组件通信</el-button>
  </div>
</template>
<script>
  export default {
    name: "OnEmitChild",
    props: {},
    data() {
      return {};
    },
    methods: {
      addNum() {
        this.$emit("addParentNum");
      }
    }
  };
</script>