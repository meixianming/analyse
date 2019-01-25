<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
  import apiMap from "@/api";
  export default {
    name: "HelloWorld",
    data() {
      return {
        msg: "Welcome to Your Vue.js App"
      };
    },
    mounted() {
      this.$http.activity
        .getBaseInfo({
          activityId: 14508
        })
        .then(resp => {
          console.log(resp);
        })
        .catch(err => {
          console.log("err is" + err);
        });
    }
  };
</script>

