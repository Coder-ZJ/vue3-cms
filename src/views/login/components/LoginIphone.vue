<template>
  <div class="account-panel">
    <el-form class="demo-ruleForm" :model="phoneForm">
      <el-form-item label="手机号" prop="phone">
        <el-input v-model="phoneForm.phone"></el-input>
      </el-form-item>
      <el-form-item label="验证码" prop="code">
        <div class="get-code">
          <el-input v-model="phoneForm.code"></el-input>
          <el-button type="primary" class="get-code-btn" @click="onClickGetCodeBtn"
            >获取验证码</el-button
          >
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup>
import { reactive } from "vue";
const phoneForm = reactive({ phone: "", code: "" });

function onClickGetCodeBtn() {
  if (!phoneForm.phone.length) {
    ElMessage.warning("请输入手机号");
  }
  console.log(phoneForm.phone);
  console.log(phoneForm.code);
}
</script>

<style lang="scss" scoped>
.get-code {
  display: flex;
  justify-content: center;
  .get-code-btn {
    margin-left: 8px;
  }
}
</style>
