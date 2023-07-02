<template>
  <nav class="bg-slate-900 items-center justify-evenly h-16 flex top-0 w-screen">
    <router-link class="route-link" to="/">Home</router-link>
    <router-link class="route-link" to="hobbies">Hobbies</router-link>
    <router-link class="route-link" to="neofetch">NeoFetch</router-link>
    <router-link class="route-link" to="place">Place</router-link>
    <router-link class="route-link" to="tech">Tech</router-link>
  </nav>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>
