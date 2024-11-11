<template>
  <div>
    <Sidebar />
    <TaskFilters @filter="applyFilters" />
    <TaskTable :tasks="filteredTasks" @toggle-complete="toggleTaskComplete" />
    <Pagination :totalPages="totalPages" :currentPage="currentPage" @page-change="changePage" />
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref } from 'vue';

import Sidebar from '@/components/Sidebar.vue';
import TaskTable from '@/components/TaskTable.vue';
import TaskFilters from '@/components/TaskFilters.vue';
import Pagination from '@/components/Pagination.vue';
import { useTaskStore } from '../stores/taskStore'; // Adjust this path as needed



export default defineComponent({
  components: {
    Sidebar,
    TaskTable,
    TaskFilters,
    Pagination,
  },
  
  setup() {
    const taskStore = useTaskStore();
    const currentPage = ref(1);

    // Fetch tasks initially
    taskStore.fetchTasks();

    const filteredTasks = computed(() => {
      // Apply filtering logic as needed
      return taskStore.tasks;
    });

    const totalPages = computed(() => Math.ceil(taskStore.tasks.length / 10));

    const toggleTaskComplete = (taskId: number) => {
      taskStore.toggleTaskComplete(taskId);
    };

    const applyFilters = (filters: any) => {
      // Implement filtering logic
    };

    const changePage = (page: number) => {
      currentPage.value = page;
      // Handle page change if needed
    };

    return { filteredTasks, totalPages, toggleTaskComplete, applyFilters, changePage };
  },
});
</script>
