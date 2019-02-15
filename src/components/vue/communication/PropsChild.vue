<template>
  <div>
    <p>
      子组件获取内容:{{parentMes}}
    </p>

  </div>
</template>
<script>
  export default {
    name: "PropsChild",
    props: {
      parentMes: String
    },
    data() {
      return {};
    }
  };
</script>