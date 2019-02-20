<template>
  <div>
    <p>throttle-函数节流：一个水龙头在滴水，可能一次性会滴很多滴，但是我们只希望它每隔 500ms 滴一滴水，保持这个频率。即我们希望函数在以一个可以接受的频率重复调用。</p>
    <p>debounce-函数防抖：将一个弹簧按下，继续加压，继续按下，只会在最后放手的一瞬反弹。即我们希望函数只会调用一次，即使在这之前反复调用它，最终也只会调用一次而已。</p>
    <div id="debounce"
         style="border:1px solid #000;">
      debounce实例：window.resize时，调整高度为宽度1/4
    </div>
    <br />
    <div id="throttle"
         style="border:1px solid #000;height:300px">
      throttle实例：鼠标滑动到该区域计数：{{count}}
    </div>

  </div>
</template>
<script>
  export default {
    name: "ThrottleDebounce",
    data() {
      return {
        count: 0
      };
    },
    methods: {
      debounce(fn) {
        let timer;
        let _self = fn;
        return function(...args) {
          clearTimeout(timer);
          timer = setTimeout(() => {
            _self(args);
          }, 200);
        };
      },
      throttle(fn, interval) {
        let timer;
        let _self = fn;
        let firstTime = true;
        return function(...args) {
          if (firstTime) {
            //第一次调用不需要延时执行
            firstTime = false;
            _self(args);
          }
          if (timer) {
            //如果定时器还在，说明前一次延时执行还没完成
            return false;
          }
          timer = setTimeout(() => {
            clearTimeout(timer);
            timer = null;
            _self(args);
          }, interval || 500);
        };
      },
      resize() {
        let div = document.getElementById("debounce");
        div.style.height = div.offsetWidth / 4 + "px";
        console.log("resize");
      },
      mouseMoveListener() {
        this.count++;
      }
    },
    mounted() {
      window.onresize = this.debounce(this.resize);
      //   const a = document.getElementById("throttle");
      document.getElementById("throttle").onmousemove = this.throttle(
        this.mouseMoveListener,
        1000
      );
      //   console.log(a);
      //   a.onmousemove = () => {
      //     console.log("meee");
      //   };
    }
  };
</script>