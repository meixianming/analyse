<style>
  .lazy-load {
    height: 100vh;
    overflow: scroll;
  }
  .lazy-img {
    min-height: 600px;
  }
</style>
<template>
  <div class="lazy-load"
       ref="lazyLoad"
       @scroll="lazyLoad">
    <p ref="a">页面中的img元素，如果没有src属性，浏览器就不会发出请求去下载图片，只有通过javascript设置了图片路径，浏览器才会发送请求。
      懒加载的原理就是先在页面中把所有的图片统一使用一张占位图进行占位，把正真的路径存在元素的“data-url”（这个名字起个自己认识好记的就行）属性里，要用的时候就取出来，再设置。</p>
    <p>延迟加载图片或符合某些条件时才加载某些图片。这样做的好处是减少不必要的访问数据库或延迟访问数据库的次数，因为每次访问数据库都是比较耗时的即只有真正使用该对象的数据时才会创建。懒加载的主要目的是作为服务器前端的优化，减少请求数或延迟请求数。</p>
    <ul>
      <li v-for="(item,index) in list"
          v-bind:key="index">
        <img alt="loading"
             class="lazy-img"
             :data-url="item" />
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
          "http://axuebin.com/lazyload/img/img1.png",
          "http://axuebin.com/lazyload/img/img2.png",
          "http://axuebin.com/lazyload/img/img3.png",
          "http://axuebin.com/lazyload/img/img4.png",
          "http://axuebin.com/lazyload/img/img5.png",
          "http://axuebin.com/lazyload/img/img6.png",
          "http://axuebin.com/lazyload/img/img7.png",
          "http://axuebin.com/lazyload/img/img8.png"
        ],
        timer: null,
        imgList: "",
        oldScrollTop: 0,
        len: 0 // 设置len以便已加载过的图片就不重复加载了
      };
    },
    mounted() {
      this.imgList = document.getElementsByClassName("lazy-img");
    },
    methods: {
      debounce(fn) {
        clearTimeout(this.timer);
        this.timer = setTimeout(() => {
          fn();
        }, 200);
      },
      loadImg() {
        const clientHeight = window.innerHeight;
        for (let i = this.len; i < this.imgList.length; i++) {
          const bound = this.imgList[i].getBoundingClientRect();
          if (bound.top <= clientHeight + 100) {
            this.imgList[i].src = this.imgList[i].getAttribute("data-url");
          }
        }
      },
      lazyLoad() {
        // 如果下拉距离大于500px则自动加载
        if (this.$refs.lazyLoad.scrollTop - this.oldScrollTop > 500) {
          this.loadImg();
          this.oldScrollTop = this.$refs.lazyLoad.scrollTop;
        } else if (this.$refs.lazyLoad.scrollTop - this.oldScrollTop < 0) {
          // 上拉不做处理
          return;
        } else {
          this.debounce(this.loadImg);
        }
      }
    }
  };
</script>