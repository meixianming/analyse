<template>
  <div>
    <h2>$on(eventName)监听事件/$emit(eventName)触发事件</h2>
    <p>
      不能用 $on 侦听子组件释放的事件，而必须在模板里直接用 v-on 绑定。
      <br />
      上面 Warn 的意思是$emit和$on只能作用在一一对应的同一个组件实例，而v-on只能作用在父组件引入子组件后的模板上。
    </p>
    <div style="width:300px;display:inline-block">
      父组件Num:{{parentNum}}
    </div>
    <on-emit-child v-on:addParentNum="addNum"></on-emit-child>
  </div>
</template>
<script>
  import OnEmitChild from "./OnEmitChild";
  export default {
    name: "OnEmit",
    components: { OnEmitChild },
    data() {
      return {
        parentNum: 1
      };
    },
    methods: {
      addNum() {
        this.parentNum++;
        console.log(`parentNun change to ${this.parentNum}`);
      }
    }
  };
</script>