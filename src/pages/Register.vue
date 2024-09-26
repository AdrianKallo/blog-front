<script setup>
import { ref } from 'vue';
import { useAuthStore } from '../stores/auth.js';
import { useRouter } from 'vue-router'

const router = useRouter()

const auth = useAuthStore()
let email = ref('');
let password = ref('');
let confirmPassword = ref('');
async function register(){
    if(password.value === confirmPassword.value){
        await auth.register(email.value, password.value);
        router.push('/');
    } else {
        console.error("Passwords do not match");
    }
}
</script>
<template>
    <div class="container">
    <b-field label="Email">
            <b-input type="email" v-model="email"></b-input>
    </b-field>
    <b-field label="Password">
        <b-input type="password" v-model="password"></b-input>
    </b-field>
    <b-field label="Confirm Password">
        <b-input type="password" v-model="confirmPassword"></b-input>
    </b-field>
    <b-button @click="register">Register</b-button>
    </div>
</template>