<style scoped>
  canvas {
    border: 1px solid black;
  }
</style>

<template>
  <div>
    <canvas id="tutorial"></canvas>
  </div>
</template>
<script>
  export default {
    name: "Canvas",
    mounted() {
      const canvas = document.querySelector("#tutorial");
      if (!canvas.getContext) return;
      const ctx = canvas.getContext("2d"); //获得 2d 上下文对象
      ctx.fillStyle = "rgb(200,0,0)";
      ctx.fillRect(10, 10, 55, 50);
      ctx.fillStyle = "rgba(0,0,200,0.5)";
      ctx.fillRect(30, 30, 55, 50);
    }
  };
</script>