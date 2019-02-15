<template>
  <div>
    <p>
      使用props传递数据作用域是孤立的，它是父组件通过模板传递而来，想接收到父组件传来的数据，需要通过props选项来进行接收。
    </p>
    <p>
      子组件不能改变当前实例中的 props 任何属性，需要通知父组件改变相应的值，重新改变。
    </p>
    <div style="width:300px;display:inline-block">
      父组件输入内容:
      <el-input v-model="mes"></el-input>
    </div>
    <props-child :parentMes="mes"></props-child>

  </div>
</template>
<script>
  import PropsChild from "./PropsChild";
  export default {
    name: "VueCommunication",
    data() {
      return {
        mes: "placeholder"
      };
    },
    components: { PropsChild }
  };
</script>