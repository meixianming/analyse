<template>
  <div>
    <p>我是孙组件。获取的secondMsg为{{secondMsg}}
      <el-button type="primary"
                 @click="changeGrandPaData">改变祖父firstMsg</el-button>
    </p>
  </div>
</template>
<script>
  export default {
    name: "AttrsListenersGrandson",
    props: {
      secondMsg: Number
    },
    data() {
      return {};
    },
    methods: {
      changeGrandPaData() {
        this.$listeners.changeData(10);
      }
    }
  };
</script>