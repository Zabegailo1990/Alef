import { createRouter, createWebHistory } from "vue-router";
import DefaultLayout from "../layouts/DefaultLayout/index.vue";
import Form from "../pages/Form/index.vue";
import Preview from "../pages/Preview/index.vue";

const routes = [
    {
        path: "/",
        component: DefaultLayout,
        children: [
            {
                path: "",
                component: Form,
            },
            {
                path: "/preview",
                component: Preview,
            },
        ],
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
