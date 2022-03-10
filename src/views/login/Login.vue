<template>
  <div class="login">
    <div class="login-panel">
      <div class="title">后台管理系统</div>
      <div class="box">
        <el-tabs type="border-card" class="tabs" stretch>
          <el-tab-pane>
            <template #label>
              <span class="custom-tabs-label">
                <el-icon><user-filled /></el-icon>
                <span>手机登录</span>
              </span>
            </template>
            <login-account-vue></login-account-vue>
          </el-tab-pane>
          <el-tab-pane>
            <template #label>
              <span class="custom-tabs-label">
                <el-icon><iphone /></el-icon>
                <span>手机登录</span>
              </span>
            </template>
            <login-iphone-vue></login-iphone-vue>
          </el-tab-pane>
        </el-tabs>
      </div>
      <div class="account-control">
        <el-checkbox label="记住密码" size="large" @change="checkboxChange"></el-checkbox>
        <el-link type="primary" href="https://element.eleme.io" target="_blank"
          >忘记密码</el-link
        >
      </div>
      <el-button type="primary" size="large" @click="onClickLoginBtn">立即登录</el-button>
    </div>
  </div>
</template>

<script setup>
import LoginAccountVue from "./components/LoginAccount.vue";
import LoginIphoneVue from "./components/LoginIphone.vue";

function onClickLoginBtn() {}
function checkboxChange(e) {
  console.log(e);
}
</script>

<style lang="scss" scoped>
.login {
  display: flex;
  justify-content: center;
  height: 100%;
  width: 100%;
  background: url("@/assets/img/login-bg.svg");
  .login-panel {
    display: flex;
    flex-direction: column;
    justify-content: center;
    .title {
      text-align: center;
      font-weight: bold;
      margin-bottom: 10px;
      font-size: 25px;
    }
    .box {
      .tabs {
        width: 300px;
      }
      .custom-tabs-label {
        display: flex;
        align-items: center;
      }
      .custom-tabs-label .el-icon {
        margin-right: 3px;
      }
    }
    .account-control {
      display: flex;
      justify-content: space-between;
      // align-items: center;
      margin: 10px 0;
    }
  }
}
</style>
