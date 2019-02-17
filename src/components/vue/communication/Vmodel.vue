<template>
  <div>
    <p>v-model 其实也是一个语法糖</p>
    <p>
      v-bind:value="something"
      v-on:input="something = $event.target.value"
    </p>

    <el-button type="primary"
               @click="show=true">打开model</el-button>
    <vmodel-child v-model="show"></vmodel-child>
    <p>
      子组件看出通过props接收了value值，当点击关闭的时候还是通过$emit事件触发input事件。
      <br />
      父组件隐式 v-on:input="something = arguments[0]" 进行了监听，一但 Input 事件触发，父组件就会执行监听回调，从而做到了双向绑定。
    </p>
  </div>
</template>
<script>
  import VmodelChild from "./VmodelChild";
  export default {
    name: "Vmodel",
    components: { VmodelChild },
    data() {
      return {
        show: false
      };
    },
    methods: {}
  };
</script>