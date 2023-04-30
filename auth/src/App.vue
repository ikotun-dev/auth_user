

<template>
  <div class="font-sans">
    <AppHeader v-if="isLoggedIn"></AppHeader>
    <LoginForm v-else></LoginForm>
    <div v-if="isLoggedIn">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue'
import LoginForm from './components/LoginForm.vue'

export default {
  name: 'App',
  components: {
    AppHeader,
    LoginForm,
  },
  data() {
    return {
      isLoggedIn: false,
    }
  },
  created() {
    // check if isLoggedIn is set to true in local storage
    const isLoggedIn = localStorage.getItem('isLoggedIn')
    if (isLoggedIn === 'true') {
      this.isLoggedIn = true
    }
  },
}
</script>
