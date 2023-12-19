<script setup lang="ts">

</script>

<template>
  <div>
    <el-card class="box-card">
      <el-form>
        <el-form-item >
          <el-input placeholder="用户名" type="text" >
            <template v-slot:prefix>
              <span class="iconfont icon-mima"></span>
            </template>
          </el-input>
        </el-form-item>
        <el-form-item >
          <el-input placeholder="密码" type="password" >
            <template v-slot:prefix>
              <span class="iconfont icon-mima"></span>
            </template>
          </el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary">登录</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<style scoped>

</style>