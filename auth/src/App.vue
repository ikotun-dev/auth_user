<template>
 <AppHeader class="app-header" ></AppHeader>
</template>

<script>
import AppHeader from './components/AppHeader.vue'

export default {
  name: 'App',
  components: {
    AppHeader
  }
}
</script>

<style src="./assets/tailwind.css"></style>

<style>
.app-header{
  @apply text-center
}
</style>