// stores/taskStore.ts
import { defineStore } from 'pinia';

interface Task {
  id: number;
  title: string;
  priority: number;
  status: string;
  department: string;
  assignedTo: string;
  completed: boolean;
}

interface TaskStoreState {
  tasks: Task[];
}

export const useTaskStore = defineStore('taskStore', {
  state: (): TaskStoreState => ({
    tasks: [],
  }),
  actions: {
    async fetchTasks() {
      // Simulate API call (replace with your actual API call)
      this.tasks = await fetch('/api/tasks').then((res) => res.json());
    },
    toggleTaskComplete(taskId: number) {
      const task = this.tasks.find((t) => t.id === taskId);
      if (task) task.completed = !task.completed;
    },
  },
});
