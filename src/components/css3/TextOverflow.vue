<style scoped>
  .demo1 {
    width: 300px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .demo2 {
    width: 100px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
  .demo3 {
    pointer-events: none;
    position: relative;
    line-height: 1.4em;
    /* 3 times the line-height to show 3 lines */
    height: 4.2em;
    overflow: hidden;
  }
  .demo3::after {
    pointer-events: auto;
    content: "...";
    font-weight: bold;
    position: absolute;
    bottom: 0;
    right: 0;
    padding: 0 20px 1px 45px;
    background: url(http://css88.b0.upaiyun.com/css88/2014/09/ellipsis_bg.png)
      repeat-y;
  }
  .demo3 p {
    margin: 0;
    height: 100%;
  }
</style>

<template>
  <div>
    <h1>文本溢出</h1>
    <div class="demo1">
      但是这个属性并不支持多行文本溢出显示省略号，这里根据应用场景介绍几个方法来实现这样的效果。
    </div>
    <div class="demo2">
      但是这个属性并不支持多行文本溢出显示省略号，这里根据应用场景介绍几个方法来实现这样的效果。
    </div>
    <div class="demo3">
      <p>
        WebKit Browsers will clamp the number of lines in this paragraph to 2. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
    </div>
  </div>
</template>
<script>
  export default {
    name: "TextOverflow"
  };
</script>