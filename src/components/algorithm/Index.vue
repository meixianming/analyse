<template>
  <div>
    <h1>算法</h1>
    <el-tabs v-model="activeName">
      <el-tab-pane label="复杂度"
                   name="first">
        <complexity></complexity>
      </el-tab-pane>
      <el-tab-pane label="排序"
                   name="second">
        <sort></sort>
      </el-tab-pane>
      <el-tab-pane label="递归"
                   name="third">
        <recursion></recursion>
      </el-tab-pane>
      <el-tab-pane label="常见例子"
                   name="forth">
        <examples></examples>
      </el-tab-pane>
      <el-tab-pane label="二叉树"
                   name="fifth">
        <binary-tree></binary-tree>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
  import Complexity from "./Complexity";
  import Sort from "./Sort";
  import Recursion from "./Recursion";
  import Examples from "./Examples";
  import BinaryTree from "./BinaryTree";
  export default {
    name: "Index",
    data() {
      return {
        activeName: "first"
      };
    },
    components: { Complexity, Sort, Recursion, Examples, BinaryTree }
  };
</script>