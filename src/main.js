import { createApp } from 'vue';
import { createRouter, createWebHashHistory, createWebHistory} from 'vue-router';
import './style.css';
import Buefy from '@ntohq/buefy-next';
import '@ntohq/buefy-next/dist/buefy.css';

import App from './App.vue';


import Home from './pages/Home.vue';
import ToDo from './pages/Todo.vue';

const routes = [
    { path: '/', component: Home },
    { path: '/todo', component: ToDo },
];

const router = createRouter({
    // 4. Provide the history implementation to use. We
    // are using the hash history for simplicity here.
    history: createWebHistory(),
    routes, // short for `routes: routes`
})
  
const app = createApp(App);
app.use(router);
app.use(Buefy);
app.mount('#app');