import Vue from "vue"
import Router from 'vue-router'
Vue.use(Router);

const routes = [
    {
        path: '/',
        name: 'loginOrAuth',
        component: () => import(/* webpackChunkName: "about" */ './components/auth/LoginOrAuth.vue')
    },
    {
        path: '/signUp',
        name: 'SignUp',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ './components/auth/SignUp')
    },
    {
        path: '/Success',
        name: 'Success',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ './components/auth/Success')
    }
]
const router = new Router({
    routes
})
export default router