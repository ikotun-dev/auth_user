<template>
    <AppHeader></AppHeader>
   <!-- <div class="bg-blue-900 h-30 w-[350px] flex items-center ml-2 justify-between rounded-lg mt-2  p-2">
     <div class="bg-white h-10 border-2 border-black w-10 rounded-full "></div>
     <h2>Name : </h2>
    </div> -->
<div class="sm:w-[410px] sm:ml-[520px]"> 
       <div class="bg-blue-900 h-16 sm:h-30 max-w-screen-md mx-2 sm:mx-auto flex items-center  rounded-md sm:mt-2 m-2  p-4">
        <i class="fas fa-user font-extrabold text-white mr-2"></i>
      <!-- <div class="bg-white h-12 sm:h-10 border-2 border-black w-12 sm:w-10  rounded-full"></div> -->
  <h2 class="text-white text-sm sm:text-lg font-extrabold" @click="user">{{user}}</h2>
  </div> 

  <div class="flex justify-between">
    <div class="bg-cyan-700 ml-2 h-24 w-32 p-4 rounded-md">
        <h2 class="text-gray-300 font-bold">Task Count </h2>
        <h1 class="text-white font-extrabold text-3xl mt-2 mr-4 text-right">0</h1>

    </div>
    <div class="bg-cyan-900 ml-2 mr-2 h-24 w-64 p-4 rounded-md">
        <h2 class="text-gray-300 font-bold">Latest Task</h2>
        <h1 class="text-white font-extrabold text-lg mt-2 mr-4 text-right">{{ last_task }}</h1>

    </div>
  </div>
  <div class="bg-blue-950 h-11 mx-3 my-2 flex pt-2 justify-center rounded-md" @click="toogleTask">
    <h1 class="text-white font-extrabold" >Add a Task</h1>
  </div>
  <div v-if="toogle == true">
    <NewForm @taskAdded="handleData"></NewForm>
    <PopNotify v-if="added == true" ></PopNotify>
  </div>
<taskSect v-on:taskAdded="handle"></taskSect>
</div>

</template>
<script>
import AppHeader from './AppHeader.vue'
import NewForm from './NewForm.vue'
import taskSect from './taskSect.vue'
import PopNotify from './PopNotify.vue'

export default{

    components : {
        AppHeader,
        NewForm,
        taskSect,
        PopNotify,

    },
    data(){
        return{
            toogle : false,
            data : [],
            popnotify : false,

        }
    },
    computed: {
     user() {
      return this.$store.state.user;
    },
    last_task(){
        return this.$store.state.lastTask;
    }
   },
    methods : {

    
    // addTask method that gets called when the "taskAdded" event is emitted
       addTask(newTask) {
            this.tasks.push(newTask)
         },

        
         toogleTask(){
            this.toogle = !this.toogle
        },//addtask

    //function to work with the emitted data passed from newForm
      handleData(newTask){

        console.log("Medium test....")

        console.log(newTask)

        this.data.push(newTask)
        this.$emit('taskAdded', newTask)

      }

    },
  

}
</script>