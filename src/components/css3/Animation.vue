<style scoped>
  .animation {
    margin: 0 auto;
  }
  span {
    color: #ffffff;
    display: inline-block;
    width: 100px;
    height: 100px;
    line-height: 100px;
    margin: 10px;
    background: blue;
  }
  .from:hover {
    animation: from 2s;
  }
  .percent:hover {
    animation: percent 5s;
  }
  @keyframes from {
    from {
      width: 100px;
      height: 100px;
      line-height: 100px;
      background: blue;
    }
    to {
      width: 150px;
      height: 150px;
      line-height: 150px;
      background: green;
    }
  }
  @keyframes percent {
    0% {
      width: 100px;
      height: 100px;
      line-height: 100px;
      background: blue;
    }
    25% {
      width: 150px;
      height: 150px;
      line-height: 150px;
      background: orange;
    }
    50% {
      width: 100px;
      height: 100px;
      line-height: 100px;
      background: yellowgreen;
    }
    100% {
      width: 80px;
      height: 80px;
      line-height: 80px;
      background: rgb(205, 50, 171);
    }
  }
</style>

<template>
  <div class="animation">
    <span class="from">from to</span>
    <span class="percent">%</span>
  </div>
</template>
<script>
  export default {
    name: "Animation"
  };
</script>