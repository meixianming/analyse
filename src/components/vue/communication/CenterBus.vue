<template>
  <div>
    <p>$emit v-on v-model .sync $attr与$listeners 以上这些都是基于嵌套的父子组件进行通信，不适用于非父子组件的通信</p>
    <p>不推荐的方法：b->a a->c &nbsp;&nbsp;a（父组件）只是一个过渡体，也可以说是一个真实的中央体，进行中央事件的派发。</p>
    <p>推荐的方法：通过额外的实例进行简单的中央事件处理</p>
    <p>如果说 vuex 是顶层共享数据源，那么中央事件就是顶层共享通信网</p>
    <center-bus-first></center-bus-first>
    <center-bus-second></center-bus-second>
  </div>
</template>
<script>
  import CenterBusFirst from "./CenterBusFirst";
  import CenterBusSecond from "./CenterBusSecond";
  export default {
    name: "CenterBus",
    components: { CenterBusFirst, CenterBusSecond },
    data() {
      return {};
    },
    methods: {}
  };
</script>