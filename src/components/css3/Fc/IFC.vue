<style scoped>
  .demo1 {
    border: 1px solid red;
    display: inline-block;
  }
  .demo1 .text {
    margin: 20px;
    background-color: green;
  }
  .demo2 {
    border: 1px solid red;
    width: 600px;
    text-align: center;
    margin: 20px auto;
  }
  .demo2 text {
    background: green;
  }
  .demo3 {
    border: 1px solid red;
  }
  .demo3 .first {
    display: inline-block;
    height: 80px;
    vertical-align: middle;
  }
</style>

<template>
  <section>
    <h4>IFC(Inline Formatting Contexts)直译为"行内格式化上下文"，符合以下任一条件即会生成一个IFC</h4>
    <ol>
      <li>块级元素中仅包含内联级别元素；</li>
    </ol>
    <h4>IFC布局规则</h4>
    <ol>
      <li>子元素水平方向横向排列，并且垂直方向起点为元素顶部。</li>
      <li>子元素只会计算横向样式空间，【padding、border、margin】，垂直方向样式空间不会被计算，【padding、border、margin】。</li>
      <li>在垂直方向上，子元素会以不同形式来对齐（vertical-align）</li>
      <li>能把在一行上的框都完全包含进去的一个矩形区域，被称为该行的行框（line box）。行框的宽度是由包含块（containing box）和与其中的浮动来决定。</li>
      <li>IFC中的“line box”一般左右边贴紧其包含块，但float元素会优先排列。</li>
      <li>IFC中的“line box”高度由 CSS 行高计算规则来确定，同个IFC下的多个line box高度可能会不同。</li>
      <li>当 inline-level boxes的总宽度少于包含它们的line box时，其水平渲染规则由 text-align 属性值来决定。</li>
      <li>当一个“inline box”超过父元素的宽度时，它会被分割成多个boxes，这些 oxes 分布在多个“line box”中。如果子元素未设置强制换行的情况下，“inline box”将不可被分割，将会溢出父元素。</li>
    </ol>
    <h4>IFC的应用</h4>
    <ol>
      <li>水平居中：当一个块要在环境中水平居中时，设置其为inline-block则会在外层产生IFC，通过text-align则可以使其水平居中。</li>
      <li>垂直居中：创建一个IFC，用其中一个元素撑开父元素的高度，然后设置其vertical-align:middle，其他行内元素则可以在此父元素下垂直居中。</li>
    </ol>
    <div class="demo1">
      <span class="text">上下间距不生效</span>
      <span class="text">上下间距不生效</span>
    </div>
    <div class="demo2">
      <span class="text">多个元素水平居中</span>
      <span class="text">多个元素水平居中</span>
    </div>
    <div class="demo3">
      <span class="first">122121</span>
      <span>122121</span>
      <span>122121</span>
    </div>
  </section>
</template>
<script>
  export default {
    name: "IFC"
  };
</script>