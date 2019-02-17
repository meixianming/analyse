<template>
  <div>
    <p>first组件数据:{{msg}}</p>
  </div>
</template>
<script>
  import Bus from "./bus";
  export default {
    name: "CenterBusFirst",
    data() {
      return {
        msg: "firstInner"
      };
    },
    created() {
      Bus.$on("fromSecondMsg", val => {
        this.msg = val;
      });
    }
  };
</script>