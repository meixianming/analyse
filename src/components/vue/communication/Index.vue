<template>
  <div>
    <el-tabs v-model="activeName">
      <el-tab-pane label="props"
                   name="first">
        <props-parent></props-parent>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
  import PropsParent from "./PropsParent";
  export default {
    name: "VueCommunication",
    data() {
      return {
        activeName: "first"
      };
    },
    components: { PropsParent }
  };
</script>