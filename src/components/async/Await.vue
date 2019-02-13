<template>
  <div style="text-align:center">
    <h1>async/await</h1>
    <el-button type="primary"
               @click="errCatch">await的异常捕获</el-button>
  </div>

</template>
<script>
  export default {
    name: "Await",
    methods: {
      // await的异常捕获相关
      errCatchFn(promise) {
        if (!promise || !Promise.prototype.isPrototypeOf(promise)) {
          return new Promise((resolve, reject) => {
            reject(new Error("require promise as the param"));
          }).catch(err => {
            return [err, null];
          });
        } else {
          return promise.then(val => [null, val]).catch(err => [err, null]);
        }
      },
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
        const [err, val] = await this.errCatchFn(this.errCatchDemo());
        console.log(`${err}  ${val}`);
      }
    },
    created() {}
  };
</script>