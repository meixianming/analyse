<template>
  <div>
    <p>v-model 毕竟不是给组件与组件之间通信而设计的双向绑定，无论从语意上和代码写法上都没有 .sync 直观和方便。</p>
    <p>无论从 v-model 还是 .sync 修饰符来看，都离不开 $emit v-on 语法糖的封装，主要目的还是为了保证数据的正确单向流动与显示流动。</p>
    <p>:foo="something" @update:foo="val => something = val"</p>
    <p>this.$emit("update:foo",newVal)</p>
    <el-button type="primary"
               @click="show=true">打开model</el-button>
    <sync-child :show.sync="show"
                :msg.sync="msg"></sync-child>
  </div>
</template>
<script>
  import SyncChild from "./SyncChild";
  export default {
    name: "Sync",
    components: { SyncChild },
    data() {
      return {
        show: false,
        msg: "这是一个model"
      };
    }
  };
</script>