<style scoped>
  .size {
    width: 300px;
    height: 300px;
    display: inline-block;
    background: url(http://www.w3school.com.cn/i/bg_flower.gif) no-repeat;
    background-size: 200px 250px;
    border: 1px solid greenyellow;
  }
  .div {
    border: 20px solid black;
    padding: 35px;
    background-image: url(http://www.w3school.com.cn/i/bg_flower.gif);
    background-repeat: no-repeat;
    background-position: left;
  }
  .div1 {
    background-origin: border-box;
  }
  .div2 {
    background-origin: content-box;
  }
  .div3 {
    background-origin: padding-box;
  }
</style>

<template>
  <div class="background">
    <span class="size">size</span>
    <div class="div div1">
      border-box:这是文本。这是文本。这是文本。这是文本。这是文本。这是文本。这是文本。这是文本。这是文本。这是文本。这是文本。这是文本。这是文本。这是文本。这是文本。这是文本。这是文本。这是文本。这是文本。这是文本。这是文本。这是文本。这是文本。这是文本。这是文本。这是文本。这是文本。这是文本。这是文本。这是文本。这是文本。这是文本。这是文本。这是文本。
    </div>
    <br />
    <div class="div div2">
      content-box:这是文本。这是文本。这是文本。这是文本。这是文本。这是文本。这是文本。这是文本。这是文本。这是文本。这是文本。这是文本。这是文本。这是文本。这是文本。这是文本。这是文本。这是文本。这是文本。这是文本。这是文本。这是文本。这是文本。这是文本。这是文本。这是文本。这是文本。这是文本。这是文本。这是文本。这是文本。这是文本。这是文本。这是文本。
    </div>
    <br />
    <div class="div div3">
      padding-box:这是文本。这是文本。这是文本。这是文本。这是文本。这是文本。这是文本。这是文本。这是文本。这是文本。这是文本。这是文本。这是文本。这是文本。这是文本。这是文本。这是文本。这是文本。这是文本。这是文本。这是文本。这是文本。这是文本。这是文本。这是文本。这是文本。这是文本。这是文本。这是文本。这是文本。这是文本。这是文本。这是文本。这是文本。
    </div>
  </div>
</template>
<script>
  export default {
    name: "Background"
  };
</script>