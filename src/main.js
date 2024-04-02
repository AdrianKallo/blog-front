import { createApp } from 'vue';
import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router';
import { createPinia } from 'pinia';

import './style.css';
import Buefy from '@ntohq/buefy-next';
import '@ntohq/buefy-next/dist/buefy.css';

import App from './App.vue';

import Home from './pages/Home.vue';
import ToDo from './pages/ToDo.vue';
import Login from './pages/Login.vue';
// 2. Define some routes
// Each route should map to a component.
// We'll talk about nested routes later.
const routes = [
    { path: '/', component: Home },
    { path: '/todo', component: ToDo },
    { path: '/login', component: Login },
];
// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = createRouter({
    // 4. Provide the history implementation to use. We
    // are using the hash history for simplicity here.
    history: createWebHistory(),
    routes, // short for `routes: routes`
});

const pinia = createPinia();

const app = createApp(App);
app.use(router);
app.use(Buefy);
app.use(pinia);
app.mount('#app');