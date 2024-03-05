import { createApp } from 'vue';
import { createRouter } from 'vue-router';

import './style.css';
import App from './App.vue';

import Home from './pages/Home.vue'
import Home from './pages/ToDo.vue'

const routes = [
    {path: '/' component: Home},
    {path: '/' component: Home},
]
createApp(App).mount('#app');