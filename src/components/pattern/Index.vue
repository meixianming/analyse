<template>
  <div>
    <h1>设计模式</h1>
    <el-tabs v-model="activeName">
      <el-tab-pane label="单例模式"
                   name="first">
        <single-ton></single-ton>
      </el-tab-pane>
      <el-tab-pane label="观察者模式"
                   name="second">
        <observer></observer>
      </el-tab-pane>
      <el-tab-pane label="发布/订阅"
                   name="third">
        <publish-subscribe></publish-subscribe>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
  import SingleTon from "./SingleTon";
  import Observer from "./Observer";
  import PublishSubscribe from "./Publish_Subscribe";
  export default {
    name: "Index",
    data() {
      return {
        activeName: "first"
      };
    },
    components: { SingleTon, Observer, PublishSubscribe }
  };
</script>