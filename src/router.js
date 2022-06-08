import Vue from 'vue'
import VueRouter from 'vue-router'
import Welcome from "./components/Welcome";
import Order from "./components/Order";


Vue.use(VueRouter)

const router = new VueRouter({
    mode:'history',
    routes:[
        {
            path:'/',
            component: Welcome
        },
        {
            path: '/order',
            component: Order
        },
    ]
})
export default router;