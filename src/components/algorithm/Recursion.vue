<template>
  <div>
    <ul style="text-align:left">
      <li>寻找出口，递归一定有一个出口，锁定出口，保证不会死循环</li>
      <li>递归条件，符合递归条件，自己调用自己。</li>
    </ul>
    <el-button type="primary"
               @click="deepClone(mei)">深度克隆</el-button>
    <el-button type="primary"
               @click="flat(list1)">Array.flat</el-button>
  </div>
</template>
<script>
  export default {
    name: "Recursion",
    data() {
      return {
        mei: {
          name: "meist",
          age: 18,
          list: [1, 2, 3, 4],
          lover: {
            name: "mei1",
            age: 16
          }
        },
        list1: [1, 2, [3, 4]],
        list2: []
      };
    },
    methods: {
      deepClone(origin, tar) {
        const deepClone = (origin, tar) => {
          let target = tar || {};
          for (let key in origin) {
            if (origin.hasOwnProperty(key)) {
              if (Array.isArray(origin[key])) {
                target[key] = [];
                deepClone(origin[key], target[key]);
              } else if (
                typeof origin[key] === "object" &&
                origin[key] !== null
              ) {
                target[key] = {};
                deepClone(origin[key], target[key]);
              } else {
                target[key] = origin[key];
              }
            }
          }
          return target;
        };
        console.log(deepClone(this.mei));
      },
      flat(arr) {
        const flat = arr => {
          let target = [];
          for (let i = 0; i < arr.length; i++) {
            if (Array.isArray(arr[i])) {
              // 递归
              target = target.concat(flat(arr[i]));
            } else {
              target.push(arr[i]);
            }
          }
          return target;
        };
        console.log(flat(arr));
      }
    }
  };
</script>