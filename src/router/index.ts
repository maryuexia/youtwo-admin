import {createRouter, createWebHistory, RouteRecordRaw} from "vue-router"


const routers: RouteRecordRaw[] = [
    {
        path: "/",
        component: () => import("../views/home/index.vue"),
    },
    {
        path: "/login",
        component: () => import("../views/login/index.vue"),
    },
]

var router = createRouter({
    history: createWebHistory(),
    routes:routers
});

export default router;
