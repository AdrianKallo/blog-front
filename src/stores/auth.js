import { defineStore } from 'pinia';
import axios from 'axios';

axios.defaults.withCredentials = true;
axios.defaults.withXSRFToken = true;

export const useAuthStore = defineStore('auth', {
    state: () => {
        return {
            user: null,
        };
    },
    actions: {
        async login(email, password) {
            let response = await axios.get('http://localhost:8000/sanctum/csrf-cookie');
            response = await axios.post('http://localhost:8000/api/login', {
                email: email,
                password: password
            });
            await this.getUser();
        },
        async register(name,email, password) {
            let response = await axios.get('http://localhost:8000/sanctum/csrf-cookie');
            response = await axios.post('http://localhost:8000/api/register', {
                email: email,
                password: password
            });
            await this.getUser();
        },
        async getUser() {
            try {
                let response = await axios.get('http://localhost:8000/api/user');
                this.user = response.data;
            } catch (err) {

            }
        },
        async logout() {
            let response = await axios.get('http://localhost:8000/sanctum/csrf-cookie');
            response = await axios.delete('http://localhost:8000/api/logout');
            this.user = null;
        }
    }
});
