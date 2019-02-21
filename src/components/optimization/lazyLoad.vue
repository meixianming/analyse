<template>
  <div>
    <p ref="a">页面中的img元素，如果没有src属性，浏览器就不会发出请求去下载图片，只有通过javascript设置了图片路径，浏览器才会发送请求。
      懒加载的原理就是先在页面中把所有的图片统一使用一张占位图进行占位，把正真的路径存在元素的“data-url”（这个名字起个自己认识好记的就行）属性里，要用的时候就取出来，再设置。</p>
    <p>延迟加载图片或符合某些条件时才加载某些图片。这样做的好处是减少不必要的访问数据库或延迟访问数据库的次数，因为每次访问数据库都是比较耗时的即只有真正使用该对象的数据时才会创建。懒加载的主要目的是作为服务器前端的优化，减少请求数或延迟请求数。</p>
    <ul>
      <li v-for="(item,index) in list"
          v-bind:key="index">
        <img alt="loading"
             :src="item" />
      </li>
    </ul>
  </div>
</template>
<script>
  export default {
    name: "LazyLoad",
    data() {
      return {
        list: [
          "https://www.baidu.com/img/bd_logo.png",
          "https://www.baidu.com/img/bd_logo.png",
          "https://www.baidu.com/img/bd_logo.png",
          "https://www.baidu.com/img/bd_logo.png",
          "https://www.baidu.com/img/bd_logo.png",
          "https://www.baidu.com/img/bd_logo.png",
          "https://www.baidu.com/img/bd_logo.png",
          "https://www.baidu.com/img/bd_logo.png",
          "https://www.baidu.com/img/bd_logo.png"
        ]
      };
    },
    mounted() {}
  };
</script>