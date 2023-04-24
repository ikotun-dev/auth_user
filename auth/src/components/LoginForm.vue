<template>
    <div class="bg-indigo-300 flex justify-center  h-screen  ">

        <div class="bg-white mt-40 mb-20 h-96 w-80 p-6 shadow-lg rounded-md sm:mt-10 sm:h-96 sm:w-96 md:w-96">
            <form>
            <h1 class="text-3xl block  text-blue-950 text-center font-semibold"><i class="fa-solid fa-user mr-3"/>Login</h1>
            <hr class="mt-3">
            <div class="mt-3">
                <label class="block text-base mb-2" for="username">Username </label>
                <input type="text" name="username" class="rounded-md border w-full text-base px-2 py-2 focus:outline-none focus:border-blue-900 focus:ring-0" />
            </div>
            <div class="mt-3">
                <label class="block text-base mb-2" for="password">Password </label>
                <input type="password" name="password" class="rounded-md border w-full text-base px-2 py-2 focus:outline-none focus:border-blue-900 focus:ring-0" />
            </div>
            <div class="mt-3 flex justify-between">

            <div>
                <a href="#" class="text-blue-950 text-bold  hover:text-blue-500 hover:font-extrabold sm:font-3xl">Forgot password ? </a>
            </div>
        </div>

            <button class="mt-5 bg-blue-900 border-1 border-yellow-200 rounded-md p-4 w-full text-white hover:text-blue-900 hover:bg-white hover:border-blue-950 hover:border-3 ">Login</button>

            </form>
            
        </div>
    
  
    </div>
</template>
<script>


export default{
    name: 'LoginForm',
    data() {
        return{
            
        }
    }
}

</script>

<style scoped>
  .bg-image {
    /* Set the background image */
    background-image: url('../assets/images/perc.png');

    /* Make the background image repeat vertically and horizontally */
    background-repeat: repeat;

    /* Set the size of the background image */
    background-size: 5%;
  }
  .bg-image-s {
    /* Set the background image */
    background-image: url('../assets/images/perc.png');

    /* Make the background image repeat vertically and horizontally */
    background-repeat: repeat;

    /* Set the size of the background image */
    background-size: 25%;
  }


</style>
