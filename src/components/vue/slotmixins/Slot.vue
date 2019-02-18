<template>
  <div>
    <p>将父组件的内容放到子组件指定的位置叫做内容分发,slot>元素作为承载分发内容的出口</p>
    <p>作用域插槽可以理解父组件中获取子组件的数据</p>
    <br />
    <slot-child style="border:1px solid #000">
      <template slot="header">
        <p>
          <span>{{headerMsg}}</span>
          <span>父组件分发内容是整个插槽的重构，而不只是简单的文本替换</span>
        </p>
      </template>
      <template slot="footer"
                slot-scope="Msg">
        <p>{{Msg.footerMsg}}</p>
      </template>
    </slot-child>
  </div>
</template>
<script>
  import SlotChild from "./SlotChild";
  export default {
    name: "SlotP",
    data() {
      return {
        headerMsg: "父组件分发的header信息",
        contentMsg: "父组件分发的content信息",
        footerMsg: "父组件分发的footer信息"
      };
    },
    components: { SlotChild }
  };
</script>