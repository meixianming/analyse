<template>
  <div style="text-align:center">
    <h1>promise</h1>
    <p>promise规定如果一个错误在reject函数中被处理，那么promise将从异常常态中恢复过来。这意味着接下来的then方法将接收到一个resolve回调。正确的做法是，不要使用reject！让错误直接到catch中捕获</p>
    <el-button type="primary"
               @click="chain">链式调用</el-button>
    <el-button type="primary"
               @click="all">all</el-button>
    <el-button type="primary"
               @click="race">race</el-button>
  </div>
</template>
<script>
  export default {
    name: "AsyncPromise",
    data() {
      return {};
    },
    methods: {
      // 链式调用
      chainDemo(val) {
        return new Promise((resolve, reject) => {
          const num = val + 1 || 10 * Math.random().toFixed(1);
          if (num < 5) {
            resolve(num);
          } else {
            reject(num);
          }
        });
      },
      chain() {
        this.chainDemo()
          .then(val => {
            console.log(`first is ${val}`);
            return this.chainDemo(val);
          })
          .then(val => {
            console.log(`second is ${val}`);
            return this.chainDemo(val);
          })
          .then(val => {
            console.log(`third is ${val}`);
            return this.chainDemo(val);
          })
          .catch(err => {
            console.log(`num is over 5`);
          });
      },

      // Promise.all
      allOrRaceDemo() {
        return new Promise((resolve, reject) => {
          const time = 1000 * Math.random().toFixed(3);
          setTimeout(() => {
            console.log(`time is ${time}`);
            resolve(time);
          }, time);
        });
      },
      all() {
        Promise.all([
          this.allOrRaceDemo(),
          this.allOrRaceDemo(),
          this.allOrRaceDemo()
        ]).then(val => {
          console.log(val);
        });
      },

      // Promise.race
      race() {
        Promise.race([
          this.allOrRaceDemo(),
          this.allOrRaceDemo(),
          this.allOrRaceDemo()
        ]).then(val => {
          console.log(val);
        });
      }

      // promise内部实现重写 及all race
    },
    created() {
      class Npromise {
        constructor(fn) {
          this.status = "pending";
          this.data = undefined;
          this.onResolveCallback = [];
          const resolve = val => {
            console.log(this);
            if (this.status === "pending") {
              this.status = "resolved";
              this.data = val;
              for (let i = 0; i < this.onResolveCallback.length; i++) {
                this.onResolveCallback[i](val);
              }
            }
          };
          fn(resolve);
        }
        then(resolve) {
          this.onResolveCallback.push(resolve);
        }
      }
    }
  };
</script>