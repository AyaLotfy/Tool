
<template>
  <div class="login-container">
    <LoginForm />
  </div>
</template>

<script setup lang="ts">
import LoginForm from '~/components/LoginForm.vue';
</script>

<style scoped>
.login-container {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f5f5f5;
}
</style>
