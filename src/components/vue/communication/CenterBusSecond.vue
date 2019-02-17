<template>
  <div>
    <el-button type="primary"
               @click="emit">second组件修改first组件数据</el-button>
  </div>
</template>
<script>
  import Bus from "./bus";
  export default {
    name: "CenterBusFirst",
    data() {
      return {};
    },
    methods: {
      emit() {
        Bus.$emit("fromSecondMsg", "secondInner");
      }
    }
  };
</script>