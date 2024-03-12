import { createApp } from 'vue';
import { createRouter, createWebHashHistory } from 'vue-router';

import './style.css';
import Buefy from '@ntohq/buefy-next';
import '@ntohq/buefy-next/dist/buefy.css';

import App from './App.vue';

import Home from './pages/Home.vue';
import ToDo from './pages/ToDo.vue';
// 2. Define some routes
// Each route should map to a component.
// We'll talk about nested routes later.
const routes = [
    { path: '/', component: Home },
    { path: '/todo', component: ToDo },
];
// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = createRouter({
    // 4. Provide the history implementation to use. We
    // are using the hash history for simplicity here.
    history: createWebHashHistory(),
    routes, // short for `routes: routes`
})
const app = createApp(App);
app.use(router);
app.use(Buefy);
app.mount('#app');