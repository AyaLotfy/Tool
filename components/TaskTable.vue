<template>
  <table>
    <thead>
      <tr>
        <th>ID</th>
        <th>Title</th>
        <th>Priority</th>
        <th>Status</th>
        <th>Department</th>
        <th>Assigned To</th>
        <th>Completed</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="task in tasks" :key="task.id">
        <td>{{ task.id }}</td>
        <td>{{ task.title }}</td>
        <td>{{ task.priority }}</td>
        <td>{{ task.status }}</td>
        <td>{{ task.department }}</td>
        <td>{{ task.assignedTo }}</td>
        <td>
          <input type="checkbox" v-model="task.completed" @change="toggleComplete(task.id)" />
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';

interface Task {
  id: number;
  title: string;
  priority: number;
  status: string;
  department: string;
  assignedTo: string;
  completed: boolean;
}

export default defineComponent({
  props: {
    tasks: {
      type: Array as PropType<Task[]>,
      required: true,
    },
  },
  methods: {
    toggleComplete(id: number) {
      // Update completion status of the task
      this.$emit('toggle-complete', id);
    },
  },
});
</script>

<style scoped>
/* Add table styling */
</style>
