
<template>
 
  <div class="font-sans">
  <AppHeader></AppHeader>
  <LoginForm></LoginForm>

  <router-view></router-view>
  </div>
 

</template>

<script>
import AppHeader from './components/AppHeader.vue'
import LoginForm from './components/LoginForm.vue';

export default {
  name: 'App',
  components: {
    AppHeader,
    LoginForm,
  }
}
</script>
