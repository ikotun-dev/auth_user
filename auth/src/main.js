// import App from './App.vue'
// import './assets/tailwind.css'

// import Vue from 'vue'
// import VueRouter from 'vue-router'
// import LoginForm from './components/LoginForm.vue'
// import DashBoard from './components/DashBoard.vue'

// Vue.use(VueRouter)

// const routes = [
//     { path: '/', component: LoginForm },
//     { path: '/dashboard', component: DashBoard }
// ]

// const router = new VueRouter({
//     mode: 'history',
//     routes
// })

// new Vue({
//     router,
//     render: h => h(App),
// }).$mount('#app')


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

createApp(App).use(router).mount('#app')
