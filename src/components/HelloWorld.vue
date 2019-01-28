<template>
  <div class="hello"
       style="text-align:center">
    <div style="margin:0 auto;width:300px;">
      <h1>{{ msg }}</h1>
      <el-input v-model="account"
                placeholder="请输入内容"></el-input>
      <br><br>
      <el-input v-model="password"
                placeholder="请输入密码"></el-input>
      <br><br>
      <el-button type="primary"
                 @click="submit">登录</el-button>
    </div>
  </div>
</template>

<script>
  import apiMap from "@/api";
  export default {
    name: "HelloWorld",
    data() {
      return {
        msg: "登录",
        account: 15779702356,
        password: 235641
      };
    },
    methods: {
      submit() {
        this.$http.account
          .doSignIn({
            userPhonenumber: this.account,
            userPsd: this.password
          })
          .then(resp => {
            this.userId = resp.userId;
            // 将passport存入web缓存中
            window.cacher.set("passport", resp.passport, 2 * 60 * 60 * 1000);
            window.cacher.set(
              "user",
              {
                userId: resp.userId,
                unitId: resp.unitId,
                permissionId: resp.permissionId,
                unitLevel: resp.unitLevel
              },
              2 * 60 * 60 * 1000
            );
          })
          .catch(err => {
            this.$alert(err.message, "登录失败");
          });
      }
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

