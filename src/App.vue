<script setup>
import MainNav from './components/MainNav.vue';
import { useAuthStore } from './stores/auth.js';
const auth = useAuthStore();
auth.getUser();
</script>
<template>
  <MainNav></MainNav>
  <Suspense>
    <RouterView></RouterView>
  </Suspense>
</template>