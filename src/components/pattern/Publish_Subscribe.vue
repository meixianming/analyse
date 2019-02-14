<template>
  <div>
    <h1>发布/订阅模式</h1>
    <p>订阅者把自己想订阅的事件注册到调度中心，当该事件触发时候，发布者发布该事件到调度中心（顺带上下文），由调度中心统一调度订阅者注册到调度中心的处理代码。
    </p>
    <el-button type="primary"
               @click="create">实现发布订阅模式</el-button>
  </div>
</template>
<script>
  export default {
    name: "PublishSubscribe",
    data() {
      return {};
    },
    methods: {
      create() {
        // 发布/订阅对象   handle  publish addSubscriber removeSubscriber
        class Observer {
          constructor() {
            this.handle = {};
          }
          addSubscriber(topic, sub) {
            if (!this.handle[topic]) {
              this.handle[topic] = {
                subs: []
              };
            }
            this.handle[topic].subs.push(sub);
          }
          removeSubscriber(topic, sub) {
            const index = this.handle[topic].subs.findIndex(item => {
              return item === sub;
            });
            this.handle[topic].subs.splice(index, 1);
          }
          publish(topic, val) {
            if (this.handle[topic]) {
              // 该话题有存在订阅者
              this.handle[topic].subs.forEach(item => {
                item(val);
              });
            }
          }
        }
        const o = new Observer();
        o.addSubscriber("mei1", val => {
          console.log(`sub1 get val:${val}`);
        });
        o.addSubscriber("mei1", val => {
          console.log(`sub2 get val:${val}`);
        });
        o.publish("mei1", "1");
        o.publish("mei2", "2");
      }
    }
  };
</script>