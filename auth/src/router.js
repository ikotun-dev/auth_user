import { createRouter, createWebHistory } from 'vue-router'
import LoginForm from './components/LoginForm.vue'
import DashBoard from './components/DashBoard.vue'

const routes = [
    { path: '/', component: LoginForm },
    { path: '/dashboard', component: DashBoard, meta: { requiresAuth: true } }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

router.beforeEach((to, from, next) => {
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true'
    if (to.matched.some(record => record.meta.requiresAuth)) {
        if (!isLoggedIn) {
            next('/')
        } else {
            next()
        }
    } else {
        next()
    }
})

export default router
