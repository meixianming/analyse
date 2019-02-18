<template>
  <div>
    <el-tabs v-model="activeName">
      <el-tab-pane label="slot"
                   name="first">
        <slot-P>
        </slot-P>
      </el-tab-pane>
      <el-tab-pane label="mixins"
                   name="second">
        <mixins></mixins>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
  import SlotP from "./Slot";
  import Mixins from "./Mixins";
  export default {
    name: "SlotMixins",
    data() {
      return {
        activeName: "first"
      };
    },
    components: { SlotP, Mixins }
  };
</script>