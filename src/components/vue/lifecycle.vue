<template>
  <div>
    <p>当Vue实例没有el属性时，则该实例尚没有挂载到某个dom中；
      假如需要延迟挂载，可以在之后手动调用vm.$mount()方法来挂载。</p>
    <p>首先会判断对象是否有el选项。如果有的话就继续向下编译，如果没有el选项，则停止编译，也就意味着停止了生命周期，直到在该vue实例上调用vm.$mount(el)。</p>
    <p>然后，我们往下看，template参数选项的有无对生命周期的影响。
      （1）.如果vue实例对象中有template参数选项，则将其作为模板编译成render函数。
      （2）.如果没有template选项，则将外部HTML作为模板编译。
      （3）.可以看到template中的模板优先级要高于outer HTML的优先级。</p>
    <p>这下就可以想想什么el的判断要在template之前了~是因为vue需要通过el找到对应的outer template。
      在vue对象中还有一个render函数，它是以createElement作为参数，然后做渲染操作，而且我们可以直接嵌入JSX.</p>
    <p>所以综合排名优先级：
      render函数选项 > template选项 > outer HTML.</p>
    <p>{{message}}</p>
    <img src="../../assets/vuelifecycle.jpeg" />
  </div>
</template>
<script>
  export default {
    name: "LifeCycle",
    data() {
      return {
        message: "this is message",
        list: ["aaa", "bbb", "ccc"]
      };
    },
    watch: {
      message(newVal, oldVal) {
        console.log("watch:message is changed");
      }
    },
    methods: {},
    beforeCreate() {
      // 在实例初始化之后，数据观测(data observer) 和 event/watcher 事件配置之前被调用。
      console.group("------beforeCreate创建前状态------");
      console.log("%c%s", "color:red", "el     : " + this.$el); //undefined
      console.log("%c%s", "color:red", "data   : " + this.$data); //undefined
      console.log("%c%s", "color:red", "message: " + this.message);
    },
    created() {
      // 实例已完成以下的配置：数据观测(data observer)，属性和方法的运算， watch/event 事件回调。
      // 然而，挂载阶段还没开始，$el 属性目前不可见。 主要应用：调用数据，调用方法，调用异步函数
      console.group("------created创建完毕状态------");
      console.log("%c%s", "color:red", "el     : " + this.$el); //undefined
      console.log("%c%s", "color:red", "data   : " + this.$data); //已被初始化
      console.log("%c%s", "color:red", "message: " + this.message); //已被初始化
    },
    beforeMount() {
      // 在挂载开始之前被调用：相关的 render 函数（模板）首次被调用。
      // 例如通过v-for生成的html还没有被挂载到页面上 （接 2created的代码）
      console.group("------beforeMount挂载前状态------");
      console.log("%c%s", "color:red", "el     : " + this.$el); // 已被初始化 这里实际应该是 [object HTMLDivElement]，.vue文件导致看不到
      console.log(this.$el); // vue文件导致看不到，实际为 <p>{{message}}</p> 这种虚拟DOM占位存在
      console.log("%c%s", "color:red", "data   : " + this.$data); //已被初始化
      console.log("%c%s", "color:red", "message: " + this.message); //已被初始化
    },
    mounted() {
      // el 被新创建的 vm.$el 替换，并挂载到实例上去之后调用该钩子。
      // 有初始值的DOM渲染，例如我们的初始数据list,渲染出来的li，只有这里才能获取（接 2created的代码）
      console.group("------mounted 挂载结束状态------");
      console.log("%c%s", "color:red", "el     : " + this.$el); //已被初始化
      console.log(this.$el);
      console.log("%c%s", "color:red", "data   : " + this.$data); //已被初始化
      console.log("%c%s", "color:red", "message: " + this.message); //已被初始化
    },
    beforeUpdate() {
      // 数据更新时调用，发生在虚拟 DOM 重新渲染和打补丁之前。 你可以在这个钩子中进一步地更改状态，这不会触发附加的重渲染过程。
      // 当我们更改Vue的任何数据，都会触发该函数
      console.group("beforeUpdate 更新前状态===============》");
      console.log("%c%s", "color:red", "el     : " + this.$el);
      console.log(this.$el);
      console.log("%c%s", "color:red", "data   : " + this.$data);
      console.log("%c%s", "color:red", "message: " + this.message);
    },
    updated() {
      // 数据更改导致的虚拟 DOM 重新渲染和打补丁，在这之后会调用该钩子
      // 你应该避免在此期间更改状态，因为这可能会导致更新无限循环
      // 服务器端渲染期间不被调用
      console.group("updated 更新完成状态===============》");
      console.log("%c%s", "color:red", "el     : " + this.$el);
      console.log(this.$el);
      console.log("%c%s", "color:red", "data   : " + this.$data);
      console.log("%c%s", "color:red", "message: " + this.message);
    },
    beforeDestroy() {
      // 实例销毁之前调用。在这一步，实例仍然完全可用。
      console.group("beforeDestroy 销毁前状态===============》");
      console.log("%c%s", "color:red", "el     : " + this.$el);
      console.log(this.$el);
      console.log("%c%s", "color:red", "data   : " + this.$data);
      console.log("%c%s", "color:red", "message: " + this.message);
    },
    destroyed() {
      // Vue 实例销毁后调用。调用后，Vue 实例指示的所有东西都会解绑定，所有的事件监听器会被移除，所有的子实例也会被销毁。
      // 服务器端渲染期间不被调用
      console.group("destroyed 销毁完成状态===============》");
      console.log("%c%s", "color:red", "el     : " + this.$el);
      console.log(this.$el);
      console.log("%c%s", "color:red", "data   : " + this.$data);
      console.log("%c%s", "color:red", "message: " + this.message);
    },
    activated() {
      // keep-alive 组件激活时调用。
      // 该钩子在服务器端渲染期间不被调用。
    },
    deactivated() {
      // keep-alive 组件停用时调用。
      // 该钩子在服务器端渲染期间不被调用。
    }
  };
</script>