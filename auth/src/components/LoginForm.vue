<template>
    <div class=" bg-gray-100  h-screen ">
        <form class=" border-blue-300 flex items-center flex-col py-40 px-10 lg:py-60 ">
            <label class="font-bold" for="username">Username : </label>
            <input  class="w-50 bg-white rounded-lg mt-3 border-cyan-900 focus:border-blue-900" type="text" name="username"/>

            <label class="pt-5 font-bold" for="password">Password : </label>
            <input class="w-50 rounded-lg mt-3 border-cyan-900 focus:border-blue-900" type="password" name="password"/>

            <button class="bg-blue-400">Login</button>


        </form>
        
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
