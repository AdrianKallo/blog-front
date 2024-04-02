<script setup>
import axios from 'axios';
import { ref } from 'vue';
import { DateTime } from "luxon";
let posts = ref([]);
axios.get('http://localhost:8000/api/posts').then(res => {
    console.log(res);
    posts.value = res.data.data;
});
</script>
<template>
    <div class="container">
        <div class="columns is-multiline">
            <div class="column is-one-quarter" v-for="post in posts">
                <div class="card">
                    <header class="card-header">
                        <p class="card-header-title">
                            {{ post.title }}
                        </p>
                    </header>
                    <div class="card-image" v-if="post.images.length">
                        <figure class="image is-4by3">
                            <img :src="post.images[0].path" alt="Placeholder image">
                        </figure>
                    </div>
                    <div class="card-content">
                        <div class="content">
                            {{ post.snippet }}
                            <p>
                                <time>{{ DateTime.fromISO(post.created_at).toFormat('F') }}</time>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>