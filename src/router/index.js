import { createRouter, createWebHistory } from "vue-router";

const resetWhiteNameList = ["Redirect", "Login", "NoFind", "Root"];
const routes = [
    {
        path: "/",
        name: "Product",
        component: () => import("@/views/product.vue"),
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes: routes,
    scrollBehavior: () => ({ left: 0, top: 0 }),
});

export const resetRouter = () => {
    router.getRoutes().forEach((route) => {
        const { name } = route;
        if (name && !resetWhiteNameList.includes(name)) {
            router.hasRoute(name) && router.removeRoute(name);
        }
    });
};

export const setupRouter = (app) => {
    app.use(router);
};

export default router;
