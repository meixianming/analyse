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
      let httpWrap = {};
      apiMap.forEach(mapItem => {
        const kv = (httpWrap[mapItem.module] = {});
        mapItem.configs.forEach(conf => {
          kv[conf.outKey] = () => {
            return new Promise((resolve, reject) => {
              const data = conf.action;
              if (data.indexOf("Detaile") !== -1) {
                resolve(data);
              } else {
                reject(data);
              }
            });
            //   return conf.action;
          };
        });
      });
      console.log(httpWrap);
      httpWrap.activity
        .getBaseInfo()
        .then(resp => {
          console.log(resp);
        })
        .catch(err => {
          alert(err);
        });
      httpWrap.activity
        .getVoteInfo()
        .then(resp => {
          console.log(resp);
        })
        .catch(err => {
          alert(err);
        });
    }
  };
</script>

