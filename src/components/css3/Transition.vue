<style scoped>
  .mei {
    width: 100px;
    height: 100px;
    background: gray;
    transition: all 2s;
    margin: 10px auto;
  }
  .transition {
    background: blue;
    width: 200px;
    height: 200px;
  }
</style>

<template>
  <div ref="mei"
       class="mei">
  </div>
</template>
<script>
  export default {
    name: "Transition",
    mounted() {
      setTimeout(() => {
        this.$refs.mei.className = "mei transition";
      }, 2000);
    }
  };
</script>