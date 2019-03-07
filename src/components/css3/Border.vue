<style scoped>
  .border span {
    width: 80px;
    height: 80px;
    line-height: 80px;
    color: #ffffff;
    display: inline-block;
    background: blue;
  }
  .radius {
    border-radius: 5px;
  }
  .shadow {
    box-shadow: 10px 10px 5px blueviolet;
  }
  .image {
    border: 15px solid;
    border-image: url("http://www.w3school.com.cn/i/border.png") 27 round;
  }
</style>

<template>
  <div class="border">
    <span class="radius">radius</span>
    <span class="shadow">shadow</span>
    <span class="image">image</span>
  </div>
</template>
<script>
  export default {
    name: "Border"
  };
</script>