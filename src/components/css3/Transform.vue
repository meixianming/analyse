<style scoped>
  #transform {
    color: #fff;
    line-height: 100px;
  }
  #transform span {
    display: inline-block;
    margin: 10px;
    width: 100px;
    height: 100px;
    background-color: blue;
    transition: all 2s;
  }
  .translate:hover {
    transform: translate(100px, 100px);
  }
  .translate3D:hover {
    transform: translate3d(100px, 100px, 10px);
  }
  .rotate:hover {
    transform: rotate(360deg);
  }
  .rotate3D:hover {
    transform: rotate3d(90, 90, 90, 360deg);
  }
  .scale:hover {
    transform: scale(0, 0);
  }
  .scale3D:hover {
    transform: scale3d(0, 0, 1);
  }
  .skew:hover {
    transform: skew(30deg, 10deg);
  }
  .matrix:hover {
    transform: matrix(0.707, 0.707, -0.707, 0.707, 0, 0);
  }
</style>

<template>
  <div id="transform">
    <span class="translate">translate</span>
    <span class="rotate">rotate</span>
    <span class="scale">scale</span>
    <span class="skew">skew</span>
    <span class="matrix">matrix</span>
    <br />
    <span class="translate3D">translate 3D</span>
    <span class="rotate3D">rotate 3D</span>
    <span class="scale3D">scale 3D</span>
  </div>
</template>
<script>
  export default {
    name: "Transform"
  };
</script>