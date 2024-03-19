<script setup>
import axios from 'axios';
import {ref} from 'vue';
import {DateTime} from ('luxon');
let posts = ref([]); 
axios.get('https://localhost:8000/api/posts').then(res =>{
    console.log(res);
    posts.value = res.data.data
})
</script>
<template>
    <div class="container">
        <div class="columns is-multiline">
            <div class="column is-"></div>
        </div>
    </div>
</template>