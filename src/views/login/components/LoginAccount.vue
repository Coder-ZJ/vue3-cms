<template>
  <div class="account-panel">
    <el-form class="demo-ruleForm" :model="userForm" :rules="rules">
      <el-form-item label="账号" prop="userName">
        <el-input v-model="userForm.userName" clearable></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="userForm.password" show-password clearable></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup>
import { ref, reactive } from "vue";
const userForm = reactive({ userName: "", password: "" });
const rules = reactive({
  userName: [{ required: true, message: "请输入账号", trigger: "blur" }],
  password: [{ required: true, message: "请输入密码", trigger: "blur" }],
});
</script>

<style lang="scss" scoped></style>
