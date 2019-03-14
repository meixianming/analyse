<style scoped>
  .item {
    border: 1px solid #000;
    height: 40px;
    line-height: 40px;
  }
  .demo1 {
    display: flex;
    justify-content: space-around;
    margin: 10px 0px;
  }

  .demo2 {
    display: flex;
    justify-content: space-between;
    margin: 10px 0px;
  }
  .flow {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    border: 1px solid #e3e3e3;
  }
  .flow .item {
    flex: 0 0 22%;
    padding-bottom: 22%; /* 做到宽高相等 */
    background: yellow;
  }
</style>

<template>
  <div>
    <img src="./flex.png" />
    <p>flex-direction: row | row-reverse | column | column-reverse;</p>
    <p>flex-wrap: nowrap | wrap | wrap-reverse; nowrap：不换行。</p>
    <p>flex-flow: flex-direction flex-wrap; flex-flow属性是flex-direction属性和flex-wrap属性的简写形式，默认值为row nowrap。</p>
    <p>justify-content: flex-start | flex-end | center | space-between | space-around; 定义了项目在主轴上的对齐方式。</p>
    <p>align-items: flex-start | flex-end | center | baseline | stretch; 定义项目在交叉轴上如何对齐.center 最好用的竖直居中 </p>
    <p>align-content: flex-start | flex-end | center | space-between | space-around | stretch; 多根轴线的对齐方式。如果项目只有一根轴线，该属性不起作用</p>
    <br />
    <p>order: integer; 定义项目的排列顺序。数值越小，排列越靠前，默认为0。</p>
    <p>flex-grow: number /* default 0 */; 项目的放大比例，默认为0，即如果存在剩余空间，也不放大</p>
    <p>flex-shrink:number /* default 1 */ 项目的缩小比例，默认为1，即如果空间不足，该项目将缩小。</p>
    <p> flex-basis: length| auto; /* default auto */ 在分配多余空间之前，项目占据的主轴空间（main size）。浏览器根据这个属性，计算主轴是否有多余空间。它的默认值为auto，即项目的本来大小。</p>
    <p>flex: none | flex-grow flex-shrink || flex-basis;flex属性是flex-grow, flex-shrink 和 flex-basis的简写，默认值为0 1 auto。后两个属性可选。 </p>
    <p> align-self: auto | flex-start | flex-end | center | baseline | stretch; 允许单个项目有与其他项目不一样的对齐方式，可覆盖align-items属性。默认值为auto</p>
    <div class="demo1">
      <div class="item"
           style="order:3;flex-grow:2">111</div>
      <div class="item"
           style="order:2;flex-grow:2"> 222</div>
      <div class="item"
           style="order:4;flex-grow:4"> 333</div>
    </div>
    <div class="demo2">
      <div class="item"
           style="flex-shrink:0">左边固定</div>
      <div class="item"
           style="flex-grow:1">中间自适应固定</div>
      <div class="item"
           style="flex-shrink:0">右边规定</div>
    </div>
    <div class="flow">
      <div class="item"></div>
      <div class="item"></div>
      <div class="item"></div>
      <div class="item"></div>
      <div class="item"></div>
    </div>
  </div>
</template>
<script>
  export default {
    name: "Flex"
  };
</script>