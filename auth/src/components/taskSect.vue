
 <template>
  <div id="showsprevioustasks" class="mt-3">
    <div  v-for="task in previousTasks" :key="task.id" class="flex justify-between h-16 mx-5 border-l-4 pl-5 pr-5 pb-5 pt-2 mb-2" :class="{ 'border-l-gray-700': !task.clicked, 'border-l-green-700': task.clicked }" @dblclick="task.clicked = !task.clicked">  
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
      reminder  : false,
    };
  },
  created() {
    this.getOldTask();
  },
  computed: {
    userId() {
      return this.$store.state.userId;
    },
  },
  methods: {
    async getOldTask() {
      if (!this.userId) {
        // Wait for the userId to be available in the store
        setTimeout(() => {
          this.getOldTask();
        }, 1000);
        return;
      }
      const res = await fetch(`http://127.0.0.1:8000/get-tasks/${this.userId}/`);
      const data = await res.json();
      if (_.isEqual(data, this.previousTasks)) {
        // No new data available, wait for 1 second and check again
        setTimeout(() => {
          this.getOldTask();
        }, 1000);
      } else {
        // New data available, update the task list
        this.previousTasks = data;
        // Wait for 1 second and check again
        setTimeout(() => {
          this.getOldTask();
        }, 1000);
      }
    },
    async deleteTask(id) {
      const res = await fetch(`http://127.0.0.1:8000/delete-task/${id}`, {
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
  },
};
</script>
