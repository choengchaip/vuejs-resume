import Vue from 'vue';
import Router from 'vue-router';
import HomePage from '../Pages/HomePage';

Vue.use(Router);
export default new Router({
    routes:[
        {
            path: "/",
            component: HomePage
        },
        {
            path: "/about",
            component: HomePage
        },
        {
            path: "/middle",
            component: HomePage
        },
        {
            path: "/project",
            component: HomePage
        },
        {
            path: "/contact",
            component: HomePage
        },
    ]
});