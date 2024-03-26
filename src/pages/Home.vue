<script setup>
import axios from 'axios';
import { ref } from 'vue';
import { DateTime } from ("luxon");
let posts = ref([]);
axios.get('http://localhost:8000/api/posts').then(res => {
    console.log(res);
    post.value = res.data.data
});
</script>

<template>
    <div class="columns is multiline">
        <div class="column">
            <div class="card">
                <header class="card-header">
                    <p class="card-header-title">
                        {{ post.title }}
                    </p>
                </header>
                <div class="card-image">
                    <figure class="image is-4by3">
                         <img :src="post.images[0].path"
                    </figure>
                </div>
            </div>
        </div>
    </div>
</template>