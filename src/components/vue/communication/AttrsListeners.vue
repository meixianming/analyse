<template>
  <div>
    <h2>通过$attrs向下传递数据 / $listeners向下传递方法</h2>
    <p>默认情况下父作用域的不被认作 props 的特性绑定 (class和style除外) 将会“回退”且作为普通的 HTML 特性应用在子组件的根元素上。当撰写包裹一个目标元素或另一个组件的组件时，这可能不会总是符合预期行为。通过设置 inheritAttrs 到 false，这些默认行为将会被去掉。而通过 (同样是 2.4 新增的) 实例属性 $attrs 可以让这些特性生效，且可以通过 v-bind 显性的绑定到非根元素上。
    </p>
    <p>依然能拿到从子组中传递过来的$listeners所有的监听事件，此时并不是通过$emit去触发，而是像调用函数一样，$emit只是针对于父子组件的双向通信，$listeners包了一个对象changeData ，通过$listeners.changeData(10)等于直接触发了事件，执行监听后的回调函数，就是通过函数的传递，调用了父组件的函数。
    </p>
    <p>我是父组件.firstMsg设为{{firstMsg}};secondMsg设为{{secondMsg}}</p>
    <attrs-listeners-child v-bind:firstMsg="firstMsg"
                           v-bind:secondMsg="secondMsg"
                           v-on:changeData="changeData"></attrs-listeners-child>
  </div>
</template>
<script>
  import AttrsListenersChild from "./AttrsListenersChild";
  export default {
    name: "AttrsListeners",
    components: { AttrsListenersChild },
    data() {
      return {
        firstMsg: 1,
        secondMsg: 2
      };
    },
    methods: {
      changeData(params) {
        this.firstMsg = params;
      }
    }
  };
</script>
