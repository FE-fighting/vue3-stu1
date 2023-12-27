import { createRouter, createWebHashHistory } from 'vue-router'

//全家桶路由配置 
const router = createRouter({
    history: createWebHashHistory(), //映射关系path->component
    routes: [{
            path: "/",
            redirect: "/home" //重定向
        },
        {
            path: "/home",
            component: () =>
                import ("@/views/home/home.vue")
        },
        {
            path: "/favor",
            component: () =>
                import ("@/views/favor/favor.vue")
        },
        {
            path: "/order",
            component: () =>
                import ("@/views/order/order.vue")
        },
        {
            path: "/message",
            component: () =>
                import ("@/views/message/message.vue")
        },
        {
            path: "/city",
            component: () =>
                import ("@/views/city/city.vue")
        }
    ]
})
export default router