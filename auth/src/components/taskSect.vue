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
export default{
  name : 'taskSect',
  data(){
    return{
      previousTasks : [],
    }
  },

  created() {
        this.getOldTask();
    },
  
  methods : {
    //function that handles getting new tasks 

    async getOldTask(){
            const res = await fetch('http://127.0.0.1:5000/get-tasks/');
            const data = await res.json();
            this.previousTasks = data;
            console.log(data)

        },//getOldtask
    
    async deleteTask(id){
      const res = await fetch(`http://127.0.0.1:5000/delete-task/${id}`, {
        method: 'DELETE'
      })
      if (res == 200){
        // Remove the task from the list
        this.previousTasks = this.previousTasks.filter(task => task.id !== id);

      }
      else{
        console.log(id)
        console.log("Error deleting task")
      }

    }
    
  }

}

</script>