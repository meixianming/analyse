<style scoped>
  .grid-container {
    width: 100%;
    max-width: 1200px;
  }

  /*-- 使用 cleafix 清除浮动 -- */
  .row {
    display: flex;
    margin: 0px -10px;
  }

  [class*="col-"] {
    min-height: 1px;
    width: 16.66%;
    box-sizing: border-box;
    margin: 0px 10px;
    /*-- 设置列的左右间隙 -- */
    background-color: #ffdcdc;
  }

  .col-1 {
    width: 16.66%;
  }
  .col-2 {
    width: 33.33%;
  }
  .col-3 {
    width: 50%;
  }
  .col-4 {
    width: 66.66%;
  }
  .col-5 {
    width: 83.33%;
  }
  .col-6 {
    width: 100%;
  }

  .outline,
  .outline * {
    outline: 1px solid #f6a1a1;
  }

  /*-- 列的额外内容样式 --*/
  [class*="col-"] > p {
    background-color: #ffc2c2;
    padding: 0;
    margin: 0;
    text-align: center;
    color: white;
  }
</style>

<template>
  <div class="grid">
    <p>一个栅格布局需要3部分组成——容器（container），行（row），列（column，也可称为栅）。栅格布局的高明之处在于它还提供了列与列之间存的间距，我们称之为栅间距（gutter）</p>
    <p>container类在布局中主要有两个作用：1.在不同的宽度区间内（响应式断点）提供宽度限制。当宽度变化时，采用不同的宽度。2.提供一个padding，阻止内部内容触碰到浏览器边界。</p>
    <div class="grid-container">
      <div class="row">
        <div class="col-1">
          <p>col-1</p>
        </div>
        <div class="col-1">
          <p>col-1</p>
        </div>
        <div class="col-1">
          <p>col-1</p>
        </div>
        <div class="col-1">
          <p>col-1</p>
        </div>
        <div class="col-1">
          <p>col-1</p>
        </div>
        <div class="col-1">
          <p>col-1</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: "Grid"
  };
</script>