<template>
  <div>
    <p>浏览器渲染引擎工作流程都差不多，大致分为5步，创建DOM树——创建StyleRules——创建Render树——布局Layout——绘制Painting</p>
    <p>虚拟DOM就是为了解决浏览器性能问题而被设计出来的：用JS对象模拟DOM节点的好处是，页面的更新可以先全部反映在JS对象(虚拟DOM)上，操作内存中的JS对象的速度显然要更快，等更新完成后，再将最终的JS对象映射成真实的DOM，交由浏览器去绘制</p>
    <p>diff算法大概就是当状态发生改变的时候，重新构造一个新的Virtual DOM，然后根据与老的Virtual DOM对比，生成patches补丁，打到对应的需要修改的地方</p>
    <a href="https://www.jianshu.com/p/af0b398602bc">虚拟DOM</a>
    &nbsp;&nbsp;
    <a href="https://www.jianshu.com/p/7b580d2e51d5">Diff算法</a>
  </div>
</template>
<script>
  export default {
    name: "Vdom"
  };
</script>