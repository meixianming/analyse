<template>
  <div>
    <p>我是子组件。获取的firstMsg为{{firstMsg}}</p>
    <attrs-listeners-grandson v-bind="$attrs"
                              v-on='$listeners'></attrs-listeners-grandson>
  </div>
</template>
<script>
  import AttrsListenersGrandson from "./AttrsListenersGrandson";
  export default {
    name: "AttrsListenersChild",
    components: { AttrsListenersGrandson },
    props: {
      firstMsg: Number
    },
    inheritAttrs: false,
    data() {
      return {};
    }
  };
</script>