<template>
  <div>
    <p>1.函数被调用（即运行时）才会确定该函数内this的指向。2.要确定函数中this的指向，必须先找到该函数被调用的位置</p>
    <el-button type="primary"
               @click="fn">作为普通函数被调用</el-button>
    <el-button type="primary"
               @click="obj">作为对象被调用</el-button>
    <el-button type="primary"
               @click="constr">作为构造函数被调用</el-button>
    <el-button type="primary"
               @click="change">call/apply/bind</el-button>
    <el-button type="primary"
               @click="arrowFn">箭头函数</el-button>
    <el-button type="primary"
               @click="defer">setTimeout/setInterval</el-button>
  </div>
</template>
<script>
  export default {
    name: "This",
    data() {
      return {};
    },
    methods: {
      fn() {
        // 这里其实是在vue实例对象调用，this指向的该vue实例对象
        // 这里模拟下全局对象   浏览器是window，Node中是global
        const _this = window;
        const _fn = function() {
          console.log(_this);
        };
        _fn();
      },
      obj() {
        // 指向调用该函数的对象，这里是vue实例对象
        // 多层嵌套的对象，内部方法的this指向离被调用函数最近的对象
        //（window也是对象，其内部对象调用方法的this指向内部对象， 而非window）
        console.log(this);
      },
      constr() {
        // 指向实例对象
        class Mei {
          constructor(name) {
            this.name = name;
          }
        }
        const mei = new Mei("mei");
        console.log(mei.name);
      },
      change() {
        //手动改变函数调用的this指向
        //call只能一个参数一个参数的传入,apply则只支持传入一个数组.且都是立即执行
        // bind函数延迟执行，传参数同call。函数柯里化？？
        const mei = {
          name: "mei",
          age: 18
        };
        const name = "st";
        const age = 28;
        const sayInfo = function(sex, univercity) {
          console.log(
            `name is ${this.name},age is ${this.age},sex is ${
              arguments[0]
            },univercity is ${arguments[1]}`
          );
        };
        sayInfo.call(mei, "man", "uestc");
        sayInfo.apply(mei, ["man", "uestc"]);
        sayInfo.bind(mei, "man", "uestc")();
      },
      arrowFn() {
        //箭头函数不绑定this， 它会捕获其所在（即定义的位置）上下文的this值， 作为自己的this值，
        setTimeout(() => {
          console.log(this);
        }, 1000);
      },
      defer() {
        //延时函数内部的回调函数的this指向全局对象window
        setTimeout(function() {
          console.log(this);
        }, 1000);
      }
    }
  };
</script>