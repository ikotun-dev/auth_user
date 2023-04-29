import { createApp } from 'vue'
import App from './App.vue'
import './assets/tailwind.css'

import { createRouter, createWebHistory } from 'vue-router'
import LoginForm from './components/LoginForm.vue'
import DashBoard from './components/DashBoard.vue'

const routes = [
    { path: '/', component: LoginForm },
    { path: '/dashboard', component: DashBoard }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

import { store } from './store';

new Vue({
  el: '#app',
  store,
  render: h => h(App)
});



import mitt from 'mitt';

const app = createApp(App);
app.config.globalProperties.$mitt = mitt();

app.use(router).mount('#app')
