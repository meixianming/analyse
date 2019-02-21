<template>
  <div>
    <p>
      图片预加载就是在网页全部加载之前，提前加载图片。当用户需要查看时可直接从本地缓存中渲染，以提供给用户更好的体验，减少等待的时间。
      这种做法实际上牺牲了服务器的性能换取了更好的用户体验。
    </p>
  </div>
</template>
<script>
  export default {
    name: "PreLoad",
    data() {
      return {};
    }
  };
</script>