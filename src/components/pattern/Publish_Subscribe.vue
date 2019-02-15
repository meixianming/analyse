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
          installTo(...objs) {
            objs.forEach(obj => {
              obj.addSubscriber = this.addSubscriber.bind(this);
              obj.removeSubscriber = this.removeSubscriber.bind(this);
            });
          }
        }
        const o = new Observer();
        const m1 = {
          getM1: val => {
            console.log(`m1 get val:${val}`);
          }
        };
        const m2 = {
          getM2: val => {
            console.log(`m2 get val:${val}`);
          }
        };
        o.installTo(m1, m2);
        m1.addSubscriber("mei1", m1.getM1);
        m2.addSubscriber("mei1", m2.getM2);
        o.publish("mei1", "1");
      }
    }
  };
</script>