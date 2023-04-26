<template>
    <AppHeader></AppHeader>
   <!-- <div class="bg-blue-900 h-30 w-[350px] flex items-center ml-2 justify-between rounded-lg mt-2  p-2">
     <div class="bg-white h-10 border-2 border-black w-10 rounded-full "></div>
     <h2>Name : </h2>
    </div> -->
<div class="sm:w-[410px]"> 
       <div class="bg-blue-900 h-16 sm:h-30 max-w-screen-md mx-2 sm:mx-auto flex items-center justify-between rounded-lg sm:mt-2 m-2  p-4">
  <!-- <div class="bg-white h-12 sm:h-10 border-2 border-black w-12 sm:w-10  rounded-full"></div> -->
  <h2 class="text-white text-sm sm:text-lg font-extrabold">Collins</h2>
  </div> 

  <div class="flex justify-between">
    <div class="bg-cyan-700 ml-2 h-24 w-32 p-4 rounded-md">
        <h2 class="text-white font-extrabold">Task Count </h2>

    </div>
    <div class="bg-cyan-900 mr-2 h-24 w-64 p-4 rounded-md">
        <h2 class="text-white font-extrabold">Latest Task</h2>

    </div>
  </div>

  <div class="mt-4 flex justify-center">

    <hr/>
   <form >
    <label class="text-lg" for="taskname">Task description </label>
    <input type="text" class="w-full rounded-md focus:outline-none focus:border-2 focus:border-blue-900"/>
   </form>
  </div>

</div>

</template>
<script>
import AppHeader from './AppHeader.vue'
export default{
    components : {
        AppHeader
    },
    data(){
        return{

        }
    },
    methods : {

    }
}
</script>