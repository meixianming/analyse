<template>
  <div style="text-align:center">
    <h1>async/promise</h1>
    <p>简单的说async函数就相当于自执行的Generator函数，相当于自带一个状态机，在await的部分等待返回， 返回后自动执行下一步。而且相较于Promise,async的优越性就是把每次异步返回的结果从then中拿到最外层的方法中，不需要链式调用，只要用同步的写法就可以了。更加直观而且，更适合处理并发调用的问题。但是async必须以一个Promise对象开始 ，所以async通常是和Promise结合使用的</p>
    <el-button type="primary"
               @click="errCatch">await的异常捕获</el-button>
  </div>
</template>
<script>
  export default {
    name: "AsyncAwait",
    data() {
      return {};
    },
    methods: {
      // await的异常捕获相关
      errCatchDemo() {
        return new Promise((resolve, reject) => {
          const a = 10 * Math.random().toFixed(1);
          if (a > 5) {
            resolve(a);
          } else {
            reject(a);
          }
        });
      },
      async errCatch() {
        // $async路径 util/async.js
        const [err, val] = await this.$async(this.errCatchDemo());
        console.log(`${err}  ${val}`);
      }
    },
    created() {}
  };
</script>