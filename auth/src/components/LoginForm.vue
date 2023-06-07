<template>
  <!-- <AppHeader></AppHeader> -->
  <div class="bg-indigo-300 flex justify-center h-screen">
    <div
      class="bg-white mt-40 mb-20 w-80 h-[450px] p-6 shadow-lg rounded-md sm:mt-10 sm:w-96 md:w-96"
    >
      <form @submit.prevent="handleSubmit">
        <h1 class="text-3xl block text-blue-950 text-center font-semibold">
          <i class="fa-solid fa-user mr-3" />Login
        </h1>

        <div
          v-if="loginStatus === false"
          class="mt-3 bg-red-100 rounded-lg p-1 border-red-400 border-2"
        >
          <h1 class="flex justify-center font-normal">Invalid details</h1>
        </div>
        <hr class="mt-3" />
        <div class="mt-3">
          <label class="block text-base mb-2" for="username">Username </label>
          <input
            type="text"
            name="username"
            v-model="username"
            class="rounded-md border w-full text-base px-2 py-2 focus:outline-none focus:border-blue-900 focus:ring-0"
          />
        </div>
        <div class="mt-3">
          <label class="block text-base mb-2" for="password">Password </label>
          <input
            type="password"
            v-model="password"
            name="password"
            class="rounded-md border w-full text-base px-2 py-2 focus:outline-none focus:border-blue-900 focus:ring-0"
          />
        </div>
        <div class="mt-3 flex justify-between">
          <a
            href="#"
            class="text-blue-950 text-bold hover:text-blue-500 hover:font-extrabold sm:font-3xl"
            >Forgot password ?
          </a>
        </div>

        <button
          type="submit"
          class="mt-5 bg-blue-900 border-1 border-yellow-200 rounded-md p-4 w-full text-white hover:text-blue-900 hover:bg-white hover:border-blue-950 hover:border-3"
        >
          Login
        </button>
      </form>
    </div>
  </div>
</template>
<script>
//import AppHeader from './AppHeader.vue';
import axios from 'axios'

export default {
  name: "LoginForm",
  components: {
    //  AppHeader,
  },
  data() {
    return {
      username: " ",
      password: " ",
      loginStatus: null,
    };
  },

  methods: {
    async handleSubmit() {
      const requestOptions = {
    
          user_name: this.username,
          password: this.password,
      };

      await axios.post("http://127.0.0.1:8000/login/", requestOptions)
        .then((response) => {
          if (response.status == 200) {
            // var access = null
            // var refresh = null
            console.log(response.data)

         //   response.then((data) => {
              //extract the access and refresh tokens
              const data = response.data 
              const access = data.access;
              const refresh = data.refresh;
              //const user_id = data.user_id
              //const last_task = data.user_last

              //storing particular data in the vuejs vuux state manage storage
              this.$store.commit("setUser", data.user);
              //storing the user id
              this.$store.commit("setUserId", data.user_id);
              console.log(data.user_id);
              console.log(
                "this.$store.state.userId:",
                this.$store.state.userId
              );

              //storing the last task
              this.$store.commit("setLastTask", data.user_last_task);

              console.log(data.user);

              //setting the access amd refresh token on the local storage
              localStorage.setItem("accessToken", access);
              localStorage.setItem("refreshToken", refresh);

              console.log(access);
              console.log(refresh);
      //      });
            console.log("It worked");

            this.$router.push("/dashboard");
            this.loginStatus = true;
            localStorage.setItem("isLoggedIn", "true");
          } else {
            console.log("Didnt fecth from the API");
            this.loginStatus = false;
            this.$router.push("/");
          }
        })
        .catch((error) => {
          console.error(error);
        });
    },
  },
};
</script>
