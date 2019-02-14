<template>
  <div>
    <h1>观察者模式</h1>
    <p>在观察者模式中，有两个角色一个是Subject，用来维护一个observer列表，另一个角色就是Observer（观察者），在Observer中定义了一个具体的update方法，用来执行相关操作。整个过程就是当某个值发生变化后，Subject调用notify方法（实际就是循环调用observerList中每个observer的update方法，并把新的值作为update的参数传递进去）。从中我们可以看出在Subject中直接调用了Observer中的方法，也就是说Subject和Observer的联系实际上是非常紧密的
    </p>
    <el-button type="primary"
               @click="createObserver">实现观察者模式</el-button>
  </div>
</template>
<script>
  export default {
    name: "Observer",
    data() {
      return {};
    },
    methods: {
      createObserver() {
        // subject  主题  observerList notify addObserver removeObserver
        // observer  观察者  update
        class Subject {
          constructor() {
            this.observerList = [];
          }
          addObserver(observer) {
            // 去重处理
            this.observerList.push(observer);
          }
          removeObserver(observer) {
            const index = observer.indexOf(observerList);
            this.observerList.splice(index, 1);
          }
          notify(val) {
            this.observerList.forEach(observer => {
              observer.update(val);
            });
          }
        }
        const s = new Subject();
        const o1 = {
          update(val) {
            console.log(`o1 get value:${val}`);
          }
        };
        const o2 = {
          update(val) {
            console.log(`o2 get value:${val}`);
          }
        };
        s.addObserver(o1);
        s.addObserver(o2);
        s.notify("mei");
      }
    }
  };
</script>