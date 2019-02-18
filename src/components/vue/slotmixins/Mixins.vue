<template>
  <div>
    <p>mixins为了提出相似的数据和功能，使代码易懂，简单、清晰。</p>
    <p>数据对象在内部会进行递归合并，在和组件的数据发生冲突时以组件数据优先。</p>
    <p>混入对象的钩子将在组件自身钩子之前调用。</p>
  </div>
</template>
<script>
  export default {
    name: "Mixins",
    data() {
      return {};
    }
  };
</script>