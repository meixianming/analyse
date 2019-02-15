<template>
  <div>
    <h1>中介者模式</h1>
    <p>通过设置 消息中心 (message center)，避免组件之间直接依赖。所有的 协同者 (colleague) 只能通过 中介者 (mediator) 进行通信。
      而相互之间不知道彼此的存在，当各个组件的消息出现循环时，消息中心可以消除组件之间的依赖混乱
    </p>
    <br />
    <p>
      观察者模式和中介者模式看起来非常的相似，核心原理都是一样的，这里有一个细微的差别，中介者模式注重状态告知，观察者模式侧重组件数据通信，其实我们这里完全使用观察者模式也可以实现状态告知，不过 但观察者是分发性的，所有的观察者都会受到信息，而且中介者则是单一的，对象的通信由中介者处理。
      <br /> 中介者模式 一般通过 观察者模式 实现
      <br /> 协同者 作为 发布者，中介者 作为 观察者
      <br />协同者 发布消息 -> 中介者 收到并处理消息 -> 中介者 直接发送消息给 协同者
      <br /> 协同者 不依赖于 中介者
      <br />当组件之间依赖关系简单时，可以直接使用 观察者模式
      <br />当组件之间依赖关系复杂是，需要借助 中介者模式 梳理关系
    </p>
    <el-button type="primary"
               @click="creatMediator">实现中介者模式</el-button>
  </div>
</template>
<script>
  export default {
    name: "Mediator",
    data() {
      return {};
    },
    methods: {
      creatMediator() {
        class Mediator {
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
              obj.publish = this.publish.bind(this);
              obj.addSubscriber = this.addSubscriber.bind(this);
              obj.removeSubscriber = this.removeSubscriber.bind(this);
            });
          }
        }
        const mediator = new Mediator();
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
        mediator.installTo(m1, m2);
        m1.addSubscriber("mei", m1.getM1);
        m2.addSubscriber("mei", m2.getM2);
        m1.publish("mei", 18);
      }
    }
  };
</script>