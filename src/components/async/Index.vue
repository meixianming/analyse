<template>
  <div>
    <h1>异步处理</h1>
    <el-tabs v-model="activeName">
      <el-tab-pane label="promise"
                   name="first">
        <async-promise></async-promise>
      </el-tab-pane>
      <el-tab-pane label="async/await"
                   name="second">
        <async-await></async-await>
      </el-tab-pane>
      <el-tab-pane label="event loop"
                   name="third">
        <event-loop></event-loop>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
  import AsyncPromise from "./Promise";
  import AsyncAwait from "./Await";
  import EventLoop from "./EventLoop";
  export default {
    name: "Index",
    data() {
      return {
        activeName: "first"
      };
    },
    components: { AsyncPromise, AsyncAwait, EventLoop }
  };
</script>