<template>


<!-- FORM FOR ADDING A NEW TASK -->

<div class="m-4 border-1 border-blue-950 flex justify-center">

<hr/>
<form @submit.prevent="addTask" class="m-2">
<label class="text-lg text-blue-950 font-semibold mb-2" for="taskname">Task description </label>
<input type="text" v-model="description" class="w-full font-serif rounded-md focus:outline-none focus:border-1 focus:border-blue-900 my-2"/>
<!-- 
<label class="text-lg text-blue-950 font-semibold" for="date">Date </label>
<input type="text" v-model="date" class="w-full rounded-md font-serif focus:outline-none focus:border-1 focus:border-blue-900 my-2"/> -->

<label class="text-lg text-blue-950 font-semibold" for="date">Date </label>
<input type="date" v-model="date" class="w-full rounded-md font-serif focus:outline-none focus:border-1 focus:border-blue-900 my-2 appearance-none border border-gray-300 py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-blue-500">



<label class="text-lg text-blue-950 font-semibold" for="detail">Details  </label>
<input type="text" v-model="detail" name="detail" class="w-full font-serif rounded-md focus:outline-none focus:border-1 focus:border-blue-900 my-2"/>

<div class="flex ">
<label class="text-lg text-blue-950 font-semibold" for="reminder" >Reminder </label>
<input type="checkbox" class="mt-2 ml-3" v-model="reminder" name="reminder" />
</div>

<div class="bg-blue-950 h-11 flex justify-center rounded-md mt-5 :hover-blue-100">
    <button type="submit" @click="emitData" class="text-white font-extrabold ">Add Task</button>
</div>

</form>
</div>


</template>
<script>
import moment from 'moment';



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

        // Format the date
      

        //function that handles the adding of a new task
        async addTask(){

                const formattedDate = moment(this.date).format('YYYY-MM-DD');
                console.log(formattedDate)

                console.log('description:', this.description);
                console.log('date:', this.detail);


                const res = await fetch(`http://127.0.0.1:8000/add-task/${this.$store.state.userId}/`, {method : 'POST',
                 headers : {
                    'Content-type'  : 'application/json'
                 },
                
                  body : JSON.stringify({ 
                        id : 1,
                        description : this.description,
                        date : formattedDate,
                        detail : this.detail ,
                        reminder : this.reminder 
                }//jsonstringify
                )//body
            }//argument

                );//request options -- fetch

                const data = await res.json()
                console.log(data)
        },//addTask


    //function to clear the details in the form 
  //  clearForm()
    //function to send the emition
    emitData(){
        const newData = {
                    'description' : this.description,
                    'date' : this.date,
                    'detail': this.detail,
                }//new data

         // Emit the event 
        this.$emit('taskAdded', newData);

        //get logs 
        console.log("Emmitted")
        // console.log(newData)

        // this.description = ''
        // this.detail = ''
        // this.date= ''

        //emitData

    }

        
    }

}
</script>