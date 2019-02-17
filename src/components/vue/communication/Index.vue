<template>
  <div>
    <el-tabs v-model="activeName">
      <el-tab-pane label="props"
                   name="first">
        <props-parent></props-parent>
      </el-tab-pane>
      <el-tab-pane label="$on/$emit"
                   name="second">
        <on-emit></on-emit>
      </el-tab-pane>
      <el-tab-pane label="Vmodel"
                   name="third">
        <vmodel></vmodel>
      </el-tab-pane>
      <el-tab-pane label="Sync"
                   name="forth">
        <sync></sync>
      </el-tab-pane>
      <el-tab-pane label="$attrs/$listeners"
                   name="sixth">
        <attrs-listeners></attrs-listeners>
      </el-tab-pane>
      <el-tab-pane label="$parent/$children"
                   name="seventh">
        <parent-children></parent-children>
      </el-tab-pane>
      <el-tab-pane label="中央事件通信"
                   name="eighth">
        <center-bus></center-bus>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
  import PropsParent from "./PropsParent";
  import OnEmit from "./OnEmit";
  import Vmodel from "./Vmodel";
  import Sync from "./Sync";
  import AttrsListeners from "./AttrsListeners";
  import ParentChildren from "./ParentChildren";
  import CenterBus from "./CenterBus";
  export default {
    name: "VueCommunication",
    data() {
      return {
        activeName: "first"
      };
    },
    components: {
      PropsParent,
      OnEmit,
      Vmodel,
      Sync,
      AttrsListeners,
      ParentChildren,
      CenterBus
    }
  };
</script>