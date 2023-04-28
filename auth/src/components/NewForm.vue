<template>


<!-- FORM FOR ADDING A NEW TASK -->

<div class="m-4 border-1 border-blue-950 flex justify-center">

<hr/>
<form @submit.prevent="addTask" class="m-2">
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
    <button type="submit" class="text-white font-extrabold ">Add Task</button>
</div>

</form>
</div>


</template>
<script>


export default{
    name: 'NewForm',
    data(){
        return{
            id : '',
            description : '',
            date : '',
            detail : '',
            reminder : false,
            
        }
    },

    
    methods : {
        //function that handles the adding of a new task
        async addTask(){
                const res = await fetch('http://127.0.0.1:5000/add-task/', {method : 'POST',
                 headers : {
                    'Content-type'  : 'application/json'
                 },
                
                  body : JSON.stringify({ 
                        description : this.description,
                        date : this.date,
                        detail : this.detail ,
                        reminder : this.reminder 
                })}

                );//request options

                if (res.status == 200){
                    // Emit the event
                    this.$root.$emit('taskAdded');

                }

                const data = await res.json()

                // const newTask = {
                //     id: data.id,
                //     description: this.description,
                //     date: this.date,
                //     detail: this.detail,
                //     reminder: this.reminder
                // }

              


                console.log(data)


        },//addTask

        
    }
}
</script>