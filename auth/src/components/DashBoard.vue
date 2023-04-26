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
  <h2 class="text-white text-sm sm:text-lg font-extrabold">Collins</h2>
  </div> 

  <div class="flex justify-between">
    <div class="bg-cyan-700 ml-2 h-24 w-32 p-4 rounded-md">
        <h2 class="text-gray-300 font-bold">Task Count </h2>
        <h1 class="text-white font-extrabold text-3xl mt-2 mr-4 text-right">0</h1>

    </div>
    <div class="bg-cyan-900 ml-2 mr-2 h-24 w-64 p-4 rounded-md">
        <h2 class="text-gray-300 font-bold">Latest Task</h2>
        <h1 class="text-white font-extrabold text-lg mt-2 mr-4 text-right">Go the clinic - 7pm</h1>

    </div>
  </div>

  <NewForm></NewForm>
  

</div>

</template>
<script>
import AppHeader from './AppHeader.vue'
import NewForm from './NewForm.vue'

export default{
    components : {
        AppHeader,
        NewForm
    },
    data(){
        return{

        }
    },
    methods : {

    }
}
</script>