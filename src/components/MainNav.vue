<script setup>
import { useAuthStore } from '../stores/auth.js';
const auth = useAuthStore()
</script>
<template>
    <b-navbar>
        <template #brand>
            <b-navbar-item tag="router-link" :to="{ path: '/' }">
                <img
                    src="https://raw.githubusercontent.com/buefy/buefy/dev/static/img/buefy-logo.png"
                    alt="Lightweight UI components for Vue.js based on Bulma"
                >
            </b-navbar-item>
        </template>
        <template #start>
            <b-navbar-item tag="router-link" to="/">
                Home
            </b-navbar-item>
            <b-navbar-item tag="router-link" to="/todo">
                Todo
            </b-navbar-item>
        </template>

        <template #end>
            <b-navbar-dropdown :label="auth.user.name" v-if="auth.user">
                <b-navbar-item @click="auth.logout()">
                    Logout
                </b-navbar-item>
            </b-navbar-dropdown>
            <b-navbar-item tag="div" v-else>
                <div class="buttons">
                    <RouterLink to="/register" class="button is-primary">
                        <strong>Register</strong>
                    </RouterLink>
                    <RouterLink to="/login" class="button is-light">
                        Log in
                    </RouterLink>
                </div>
            </b-navbar-item>
        </template>
    </b-navbar>
</template>