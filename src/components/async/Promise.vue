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
    <el-button type="primary"
               @click="createPromise">重写promise</el-button>
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
      },
      // promise内部实现重写 及all race
      createPromise() {
        // 判断变量否为function
        const isFunction = variable => typeof variable === "function";
        // 定义Promise的三种状态常量
        const PENDING = "PENDING";
        const FULFILLED = "FULFILLED";
        const REJECTED = "REJECTED";

        class MyPromise {
          constructor(handle) {
            if (!isFunction(handle)) {
              throw new Error("MyPromise must accept a function as a parameter");
            }
            // 添加状态
            this._status = PENDING;
            // 添加状态
            this._value = undefined;
            // 添加成功回调函数队列
            this._fulfilledQueues = [];
            // 添加失败回调函数队列
            this._rejectedQueues = [];
            // 执行handle
            try {
              handle(this._resolve.bind(this), this._reject.bind(this));
            } catch (err) {
              this._reject(err);
            }
          }
          // 添加resovle时执行的函数
          _resolve(val) {
            const run = () => {
              if (this._status !== PENDING) return;
              this._status = FULFILLED;
              // 依次执行成功队列中的函数，并清空队列
              const runFulfilled = value => {
                let cb;
                while ((cb = this._fulfilledQueues.shift())) {
                  cb(value);
                }
              };
              // 依次执行失败队列中的函数，并清空队列
              const runRejected = error => {
                let cb;
                while ((cb = this._rejectedQueues.shift())) {
                  cb(error);
                }
              };
              //如果resolve的参数为Promise对象，则必须等待该Promise对象状态改变后,
              //当前Promsie的状态才会改变，且状态取决于参数Promsie对象的状态
              if (val instanceof MyPromise) {
                val.then(
                  value => {
                    this._value = value;
                    runFulfilled(value);
                  },
                  err => {
                    this._value = err;
                    runRejected(err);
                  }
                );
              } else {
                this._value = val;
                runFulfilled(val);
              }
            };
            // 为了支持同步的Promise，这里采用异步调用
            setTimeout(run, 0);
          }
          // 添加reject时执行的函数
          _reject(err) {
            if (this._status !== PENDING) return;
            // 依次执行失败队列中的函数，并清空队列
            const run = () => {
              this._status = REJECTED;
              this._value = err;
              let cb;
              while ((cb = this._rejectedQueues.shift())) {
                cb(err);
              }
            };
            // 为了支持同步的Promise，这里采用异步调用
            setTimeout(run, 0);
          }
          // 添加then方法
          then(onFulfilled, onRejected) {
            const { _value, _status } = this;
            // 返回一个新的Promise对象
            return new MyPromise((onFulfilledNext, onRejectedNext) => {
              // 封装一个成功时执行的函数
              let fulfilled = value => {
                try {
                  if (!isFunction(onFulfilled)) {
                    onFulfilledNext(value);
                  } else {
                    let res = onFulfilled(value);
                    if (res instanceof MyPromise) {
                      // 如果当前回调函数返回MyPromise对象，必须等待其状态改变后在执行下一个回调
                      res.then(onFulfilledNext, onRejectedNext);
                    } else {
                      //否则会将返回结果直接作为参数，传入下一个then的回调函数，并立即执行下一个then的回调函数
                      onFulfilledNext(res);
                    }
                  }
                } catch (err) {
                  // 如果函数执行出错，新的Promise对象的状态为失败
                  onRejectedNext(err);
                }
              };
              // 封装一个失败时执行的函数
              let rejected = error => {
                try {
                  if (!isFunction(onRejected)) {
                    onRejectedNext(error);
                  } else {
                    let res = onRejected(error);
                    if (res instanceof MyPromise) {
                      // 如果当前回调函数返回MyPromise对象，必须等待其状态改变后在执行下一个回调
                      res.then(onFulfilledNext, onRejectedNext);
                    } else {
                      //否则会将返回结果直接作为参数，传入下一个then的回调函数，并立即执行下一个then的回调函数
                      onFulfilledNext(res);
                    }
                  }
                } catch (err) {
                  // 如果函数执行出错，新的Promise对象的状态为失败
                  onRejectedNext(err);
                }
              };
              switch (_status) {
                // 当状态为pending时，将then方法回调函数加入执行队列等待执行
                case PENDING:
                  this._fulfilledQueues.push(fulfilled);
                  this._rejectedQueues.push(rejected);
                  break;
                // 当状态已经改变时，立即执行对应的回调函数
                case FULFILLED:
                  fulfilled(_value);
                  break;
                case REJECTED:
                  rejected(_value);
                  break;
              }
            });
          }
          // 添加catch方法
          catch(onRejected) {
            return this.then(undefined, onRejected);
          }
          // 添加静态resolve方法
          static resolve(value) {
            // 如果参数是MyPromise实例，直接返回这个实例
            if (value instanceof MyPromise) return value;
            return new MyPromise(resolve => resolve(value));
          }
          // 添加静态reject方法
          static reject(value) {
            return new MyPromise((resolve, reject) => reject(value));
          }
          // 添加静态all方法
          static all(list) {
            return new MyPromise((resolve, reject) => {
              /**
               * 返回值的集合
               */
              let values = [];
              let count = 0;
              for (let [i, p] of list.entries()) {
                // 数组参数如果不是MyPromise实例，先调用MyPromise.resolve
                this.resolve(p).then(
                  res => {
                    values[i] = res;
                    count++;
                    // 所有状态都变成fulfilled时返回的MyPromise状态就变成fulfilled
                    if (count === list.length) resolve(values);
                  },
                  err => {
                    // 有一个被rejected时返回的MyPromise状态就变成rejected
                    reject(err);
                  }
                );
              }
            });
          }
          // 添加静态race方法
          static race(list) {
            return new MyPromise((resolve, reject) => {
              for (let p of list) {
                // 只要有一个实例率先改变状态，新的MyPromise的状态就跟着改变
                this.resolve(p).then(
                  res => {
                    resolve(res);
                  },
                  err => {
                    reject(err);
                  }
                );
              }
            });
          }
          finally(cb) {
            return this.then(
              value => MyPromise.resolve(cb()).then(() => value),
              reason =>
                MyPromise.resolve(cb()).then(() => {
                  throw reason;
                })
            );
          }
        }
        new MyPromise((resolve, reject) => {
          resolve();
        }).then(val => {
          console.log(`new MyPromise success`);
        });
      }
    }
  };
</script>