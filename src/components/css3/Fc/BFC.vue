<style scoped>
  ol {
    text-align: left;
  }
  div {
    width: 300px;
  }
  .aside {
    width: 100px;
    height: 150px;
    float: left;
    background: black;
  }
  .main {
    height: 200px;
    background-color: red;
  }
  .p {
    width: 200px;
    height: 50px;
    margin: 50px 0;
    background-color: red;
  }
  .wrap {
    overflow: hidden;
  }
  .child {
    border: 1px solid red;
    width: 100px;
    height: 100px;
    float: left;
  }
  .parent {
    border: 1px solid black;
    width: 300px;
    overflow: hidden;
  }
</style>

<template>
  <section>
    <h4>BFC（Block Formatting Context）叫做“块级格式化上下文”。BFC的布局规则如下：</h4>
    <ol>
      <li>内部的盒子会在垂直方向，一个个地放置；</li>
      <li>盒子垂直方向的距离由margin决定，属于同一个BFC的两个相邻Box的上下margin会发生重叠；</li>
      <li>每个元素的左边，与包含的盒子的左边相接触，即使存在浮动也是如此；</li>
      <li>BFC的区域不会与float重叠；</li>
      <li>BFC就是页面上的一个隔离的独立容器，容器里面的子元素不会影响到外面的元素，反之也如此；</li>
      <li>计算BFC的高度时，浮动元素也参与计算。</li>
    </ol>
    <h4>介绍过了BFC的布局规范，再来说说哪些元素会产生BFC。</h4>
    <ol>
      <li>根元素</li>
      <li>float的属性不为none</li>
      <li>position为absolute或fixed</li>
      <li>display为inline-block，table-cell，table-caption，flex；</li>
      <li>overflow不为visible</li>
    </ol>
    <h4>BFC的应用</h4>
    <ol>
      <li>防止margin发生重叠</li>
      <li>防止发生因浮动导致的高度塌陷</li>
    </ol>
    <div class="p"></div>
    <div class="wrap">
      <div class="p"></div>
    </div>
    <div class="parent">
      <div class="child"></div>
    </div>
  </section>
</template>
<script>
  export default {
    name: "BFC"
  };
</script>