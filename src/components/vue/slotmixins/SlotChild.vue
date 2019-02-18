<template>
  <div>
    <slot name="header">
      <p>我是子组件的默认头部信息</p>
    </slot>
    <slot name="content">
      <p>我是子组件的默认文本信息</p>
    </slot>
    <slot name="footer"
          :footerMsg="childFooterMsg">
      <p>我是子组件的默认底部信息</p>
    </slot>
  </div>
</template>
<script>
  export default {
    name: "SlotChild",
    data() {
      return {
        childFooterMsg: "底部内容显示作用域插槽传递的数据"
      };
    }
  };
</script>