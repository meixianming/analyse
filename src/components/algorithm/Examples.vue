<template>
  <div>
    <el-button type="primary"
               @click="unique(arr)">数组去重</el-button>
  </div>
</template>
<script>
  export default {
    name: "Examples",
    data() {
      return {
        arr: [2, 2, "s", "t", "mei", "s"]
      };
    },
    methods: {
      unique(arr) {
        // 利用对象key值唯一性
        let obj = {};
        let result = [];
        const len = arr.length;
        for (let i = 0; i < len; i++) {
          if (!obj[arr[i]]) {
            obj[arr[i]] = true;
            result.push(arr[i]);
          }
        }
        console.log(result);
      }
    }
  };
</script>