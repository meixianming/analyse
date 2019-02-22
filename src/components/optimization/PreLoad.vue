<template>
  <div>
    <p>
      图片预加载就是在网页全部加载之前，提前加载图片。当用户需要查看时可直接从本地缓存中渲染，以提供给用户更好的体验，减少等待的时间。
      这种做法实际上牺牲了服务器的性能换取了更好的用户体验。
    </p>
    <p>方法一：用CSS和JavaScript实现预加载。我们便可通过CSS的background属性将图片预加载到屏幕外的背景上。只要这些图片的路径保持不变，当它们在web页面的其他地方被调用时，浏览器就会在渲染过程中使用预加载（缓存）的图片</p>
    <p>方法二：仅使用JavaScript实现预加载
      <el-button type="primary"
                 @click="preloader2">预加载二</el-button>
    </p>
    <p>方法三：使用ajax。即请求后台接口</p>
  </div>
</template>
<script>
  export default {
    name: "PreLoad",
    data() {
      return {};
    },
    methods: {
      preloader2() {
        // 时间应该在mounted生命周期，当页面内容已挂靠完成后执行
        if (document.images) {
          var img1 = new Image();
          var img2 = new Image();
          var img3 = new Image();
          img1.src = "http://domain.tld/path/to/image-001.gif";
          img2.src = "http://domain.tld/path/to/image-002.gif";
          img3.src = "http://domain.tld/path/to/image-003.gif";
        }
      },
      preloader3() {
        // 向后台发送接口直接请求数据
        // 	$(function(){
        //     $.get('图片的路径');
        // })
      }
    }
  };
</script>