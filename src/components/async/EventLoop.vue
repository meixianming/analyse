<template>
  <div style="text-align:center">
    <h1>Event Loop(事件循环)</h1>
    <p>具体来说，异步执行的运行机制如下。（同步执行也是如此，因为它可以被视为没有异步任务的异步执行。）</p>
    <ol style="text-align:left">
      <li>所有同步任务都在主线程上执行，形成一个执行栈（execution context stack）</li>
      <li>主线程之外，还存在一个"任务队列"（task queue）。只要异步任务有了运行结果，就在"任务队列"之中放置一个事件。</li>
      <li>一旦"执行栈"中的所有同步任务执行完毕，系统就会读取"任务队列"，看看里面有哪些事件。那些对应的异步任务，于是结束等待状态，进入执行栈，开始执行。</li>
      <li>主线程不断重复上面的第三步</li>
    </ol>
    <br />
    <p>广义的同步任务和异步任务，我们可以分的更加精细一点 </p>
    <ul>
      <li>microtasks： peomise,Object.observe...</li>
      <li>macrotasks:包括整体代码script,setTimeout,setInterval,I/O,UI渲染</li>
    </ul>
    <el-button type="primary"
               @click="test">promise/setTimeout</el-button>
  </div>
</template>
<script>
  export default {
    name: "EventLoop",
    data() {
      return {};
    },
    methods: {
      // 首先会遇到setTimeout,将其放到宏任务event queue里面
      // 然后回到 promise ， new promise 会立即执行， then会分发到微任务
      // 遇到 console 立即执行
      // 整体宏任务执行完成，接下来判断是否有微任务
      // ，刚刚放到微任务里面的then，执行
      // ok，第一轮事件结束，进行第二轮，刚刚我们放在event queue 的setTimeout 函数进入到宏任务，立即执行
      test() {
        setTimeout(function() {
          console.log("setTimeout");
        });
        new Promise(function(resolve) {
          console.log("promise");
          resolve();
        }).then(function() {
          console.log("then");
        });
        console.log("console");
      }
    }
  };
</script>