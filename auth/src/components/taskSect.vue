<!-- 
<template>
  <div id="showsprevioustasks" class="mt-3">
    <div v-for="task in previousTasks" :key="task.id" class="flex justify-between bg-gray-200 h-16 mx-5 border-l-4 pl-5 pr-5 pb-5 pt-2 mb-2 border-l-gray-700">
      <div>
        <h2>{{ task.description }}</h2>
        <h4>Date: {{ task.date }}</h4>
      </div>
      <div>
        <i class="fas fa-xmark text-red-950 " @click="deleteTask(task.id)"></i>
      </div>
    </div>  
  </div>
</template>
<script>
import _ from 'lodash';

export default {
  name: 'taskSect',
  data() {
    return {
      previousTasks: [],
    };
  },
  async created() {
    await this.getOldTask();
    setInterval(_.debounce(this.getOldTask, 1000), 1000);
  },
  methods: {
    async getOldTask() {
      try {
        const res = await fetch('http://127.0.0.1:5000/get-tasks/');
        const data = await res.json();
        this.previousTasks = data;
      } catch (error) {
        console.error('Error getting old tasks', error);
      }
    },
    async deleteTask(id) {
      try {
        const res = await fetch(`http://127.0.0.1:5000/delete-task/${id}`, {
          method: 'DELETE',
        });
        if (res.status === 200) {
          this.previousTasks = this.previousTasks.filter((task) => task.id !== id);
        } else {
          console.error(`Error deleting task with id ${id}`);
        }
      } catch (error) {
        console.error(`Error deleting task with id ${id}`, error);
      }
    },
    handle(newTask) {
      console.log(newTask);
    },
  },
};
</script> -->


<template>
  <div id="showsprevioustasks" class="mt-3">
    <div v-for="task in previousTasks" :key="task.id" class="flex justify-between bg-gray-200 h-16 mx-5 border-l-4 pl-5 pr-5 pb-5 pt-2 mb-2 border-l-gray-700">
      <div>
        <h2>{{ task.description }}</h2>
        <h4>Date: {{ task.date }}</h4>
      </div>
      <div>
        <i class="fas fa-xmark text-red-950 " @click="deleteTask(task.id)"></i>
      </div>
    </div>
  </div>
</template>

<script>
import _ from 'lodash';

export default {
  name: 'taskSect',
  data() {
    return {
      previousTasks: [],
    };
  },
  created() {
    this.getOldTask();
  },
  methods: {
    async getOldTask() {
      const res = await fetch('http://127.0.0.1:5000/get-tasks/');
      const data = await res.json();
      if (_.isEqual(data, this.previousTasks)) {
        // No new data available, wait for 1 second and check again
        setTimeout(this.getOldTask, 1000);
      } else {
        // New data available, update the task list
        this.previousTasks = data;
        console.log(this.previousTasks.id);
        console.log(data);
        // Wait for 1 second and check again
        setTimeout(this.getOldTask, 1000);
      }
    },
    async deleteTask(id) {
      const res = await fetch(`http://127.0.0.1:5000/delete-task/${id}`, {
        method: 'DELETE',
      });
      if (res.status === 200) {
        // Remove the task from the list
        this.previousTasks = this.previousTasks.filter(
          (task) => task.id !== id
        );
      } else {
        console.log(id);
        console.log('Error deleting task');
      }
    },
    handle(newTask) {
      console.log(newTask);
    },
  },
};
</script>
