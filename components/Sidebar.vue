<template>
  <nav class="sidebar">
    <ul>
      <li><NuxtLink to="/">Dashboard</NuxtLink></li>
      <li><NuxtLink to="/contacts">Contacts</NuxtLink></li>
      <li><NuxtLink to="/tickets">Tickets</NuxtLink></li>
    </ul>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({});
</script>

<style scoped>
.sidebar {
  width: 200px;
  /* Add any additional styling */
}
</style>
