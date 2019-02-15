<template>
  <div>
    <h1>设计模式</h1>
    <el-tabs v-model="activeName">
      <el-tab-pane label="单例"
                   name="first">
        <single-ton></single-ton>
      </el-tab-pane>
      <el-tab-pane label="观察者"
                   name="second">
        <observer></observer>
      </el-tab-pane>
      <el-tab-pane label="发布/订阅"
                   name="third">
        <publish-subscribe></publish-subscribe>
      </el-tab-pane>
      <el-tab-pane label="中介者"
                   name="forth">
        <mediator></mediator>
      </el-tab-pane>
      <el-tab-pane label="代理"
                   name="fifth">
        <proxy></proxy>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
  import SingleTon from "./SingleTon";
  import Observer from "./Observer";
  import PublishSubscribe from "./Publish_Subscribe";
  import Mediator from "./Mediator";
  import Proxy from "./Proxy";
  export default {
    name: "Index",
    data() {
      return {
        activeName: "first"
      };
    },
    components: { SingleTon, Observer, PublishSubscribe, Mediator, Proxy }
  };
</script>