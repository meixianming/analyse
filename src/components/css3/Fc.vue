<style scoped>
</style>

<template>
  <div>
    <el-tabs v-model="activeName">
      <el-tab-pane label="BFC"
                   name="first">
        <BFC></BFC>
      </el-tab-pane>
      <el-tab-pane label="IFC"
                   name="second">
        <IFC></IFC>
      </el-tab-pane>
      <el-tab-pane label="GFC"
                   name="third">
        <GFC></GFC>
      </el-tab-pane>
      <el-tab-pane label="定时任务补偿"
                   name="fourth">定时任务补偿</el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
  import BFC from "./Fc/BFC";
  import IFC from "./Fc/IFC";
  import GFC from "./Fc/GFC";
  export default {
    name: "FormattingContext",
    components: { BFC, IFC, GFC },
    data() {
      return {
        activeName: "first"
      };
    }
  };
</script>