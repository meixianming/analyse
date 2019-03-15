<template>
  <div>
    <el-button type="primary"
               @click="bubbleSort(array)">冒泡排序</el-button>
    <el-button type="primary"
               @click="selectSort(array)">选择排序</el-button>
    <el-button type="primary"
               @click="insertSort(array)">插入排序</el-button>
    <br />
    <br />
    <el-button type="danger"
               @click="quickSort(array)">快速排序</el-button>
    <el-button>希尔排序</el-button>
  </div>
</template>
<script>
  export default {
    name: "Sort",
    data() {
      return {
        array: [3, 4, 1, 7, 8, 6, 5, 2]
      };
    },
    methods: {
      bubbleSort(arr) {
        const len = arr.length;
        for (let j = len; j > 1; j--) {
          for (let i = 0; i < j; i++) {
            if (arr[i] > arr[i + 1]) {
              [arr[i + 1], arr[i]] = [arr[i], arr[i + 1]];
            }
          }
        }
        console.log(arr);
      },
      selectSort(arr) {
        const len = arr.length;
        for (let j = 0; j < len - 1; j++) {
          for (let i = j; i < len; i++) {
            if (arr[i] < arr[j]) {
              [arr[i], arr[j]] = [arr[j], arr[i]];
            }
          }
        }
        console.log(arr);
      },
      insertSort(arr) {
        const len = arr.length;
        for (let i = 1; i < len; i++) {
          let temp = arr[i];
          let j = i - 1;
          while (j >= 0 && arr[j] > temp) {
            arr[j + 1] = arr[j];
            j--;
          }
          arr[j + 1] = temp;
        }
        console.log(arr);
      },
      quickSort(arr) {
        const quickSort = arr => {
          if (arr.length <= 1) {
            return arr; //递归出口
          }
          var left = [],
            right = [],
            current = arr.splice(0, 1); //注意splice后，数组长度少了一个
          for (let i = 0; i < arr.length; i++) {
            if (arr[i] < current) {
              left.push(arr[i]); //放在左边
            } else {
              right.push(arr[i]); //放在右边
            }
          }
          return quickSort(left).concat(current, quickSort(right)); //递归
        };
        console.log(quickSort(arr));
      }
    }
  };
</script>