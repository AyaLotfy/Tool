<template>
  <div>
    <input type="text" v-model="search" placeholder="Search by title..." @input="applyFilters" />
    <select v-model="priority" @change="applyFilters">
      <option value="">All Priorities</option>
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  emits: ['filter'],
  setup(_, { emit }) {
    const search = ref('');
    const priority = ref('');

    const applyFilters = () => {
      emit('filter', { search: search.value, priority: priority.value });
    };

    return { search, priority, applyFilters };
  },
});
</script>
