import { createApp } from 'vue'
import App from './App.vue'
import './assets/tailwind.css'

import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Login from './components/Login.vue'
import DashBoard from './components/DashBoard.vue'

Vue.use(VueRouter)

const routes = [
    { path: '/', component: Login },
    { path: '/dashboard', component: DashBoard }
]

const router = new VueRouter({
    mode: 'history',
    routes
})

new Vue({
    router,
    render: h => h(App),
}).$mount('#app')

