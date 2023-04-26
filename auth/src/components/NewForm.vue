<template>


<!-- FORM FOR ADDING A NEW TASK -->

<div class="m-4 border-1 border-blue-950 flex justify-center">

<hr/>
<form class="m-2">
<label class="text-lg text-blue-950 font-semibold mb-2" for="taskname">Task description </label>
<input type="text" v-model="description" class="w-full font-serif rounded-md focus:outline-none focus:border-1 focus:border-blue-900 my-2"/>

<label class="text-lg text-blue-950 font-semibold" for="date">Date </label>
<input type="text" v-model="date" class="w-full rounded-md font-serif focus:outline-none focus:border-1 focus:border-blue-900 my-2"/>


<label class="text-lg text-blue-950 font-semibold" for="detail">Details  </label>
<input type="text" v-model="detail" name="detail" class="w-full font-serif rounded-md focus:outline-none focus:border-1 focus:border-blue-900 my-2"/>

<div class="flex ">
<label class="text-lg text-blue-950 font-semibold" for="reminder">Reminder </label>
<input type="checkbox" class="mt-2 ml-3" v-model="reminder" name="reminder" />
</div>

<div class="bg-blue-950 h-11 flex justify-center rounded-md mt-5 :hover-blue-100">
    <button class="text-white font-extrabold ">Add Task</button>
</div>

</form>
</div>

<div class="mt-3">
    <!-- Tasks -->
    <div class="bg-gray-200 h-16 mx-5 border-l-4 pl-5 pr-5 pb-5 pt-2 mb-2 border-l-gray-700">
        <h2> Go to class </h2>
        <h4>date : 9/09/21</h4>
    </div>

    <div class="bg-gray-200 h-16 mx-5 border-l-4 pl-5 pr-5 pb-5 pt-2 mb-2 border-l-gray-700">
        <h2> Go to church </h2>
        <h4>date : 9/09/21</h4>
    </div>

    <div class="bg-gray-200 h-16 mx-5 border-l-4 pl-5 pr-5 pb-5 pt-2 mb-2 border-l-gray-700">
        <h2> Go to NH </h2>
        <h4>date : 9/09/21</h4>
    </div>


</div>
</template>
<script>
export default{
    name: 'NewForm',
    data(){
        return{
            description : '',
            date : '',
            detail : '',

        }
    }
}
</script>