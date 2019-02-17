<template>
  <div v-show="show">
    <p>{{msg}}</p>
    <el-button type="primary"
               @click="closeModel">关闭model</el-button>
    <el-button type="primary"
               @click="changeMsg">修改文本</el-button>
  </div>
</template>
<script>
  export default {
    name: "SyncChild",
    props: {
      show: Boolean,
      msg: String
    },
    data() {
      return {};
    },
    methods: {
      closeModel() {
        this.$emit("update:show", false);
      },
      changeMsg() {
        this.$emit("update:msg", "修改了model文案");
      }
    }
  };
</script>