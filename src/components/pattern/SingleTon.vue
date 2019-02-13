<template>
  <div style="text-align:center">
    <h1>单例模式</h1>
    <p>保证一个类仅有一个实例，并提供一个访问它的全局访问点</p>
    <el-button type="primary"
               @click="createApple">创建Apple公司</el-button>
    <el-button type="primary"
               @click="createLogin">创建Login</el-button>
  </div>
</template>
<script>
  export default {
    name: "SingleTon",
    data() {
      return {};
    },
    methods: {
      createApple() {
        class singleApple {
          constructor(name, creator, productions) {
            this.name = name;
            this.creator = creator;
            this.productions = productions;
          }
          static createApple(name, creator, productions) {
            if (!this.instance) {
              this.instance = new singleApple(name, creator, productions);
            }
            return this.instance;
          }
        }
        const a = singleApple.createApple("APPLE", "Steve Jobs", ["phone", "pc"]);
        const b = singleApple.createApple("mei", "mei", ["mei"]);
        console.log(a);
        console.log(b);
      },
      createLogin() {
        class Login {
          constructor() {
            this.init();
          }
          init() {
            // 创建html
          }
          static open() {
            if (!this.instance) {
              this.instance = new Login();
            }
            //instance的状态改为显示
            return this.instance;
          }
          static close() {
            // instance的状态改为隐藏
          }
        }
        Login.open();
      }
    }
  };
</script>