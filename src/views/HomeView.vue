<script setup>
import NavBar from '../components/NavBar.vue'
import BotBar from '../components/BotBar.vue'
</script>

<template>
  <NavBar />
  <div class="justify-center items-center flex">
    <div
      class="text-center bg-slate-800 rounded-3xl w-110 m-40 scale-75 p-20 hover:scale-90 transition-all duration-75"
    >
      <img class="inline-block rounded-full hover:animate-spin" src="/profile.png" alt="" />
      <h1 class="text-4xl font-bold p-10">Halo, I'm Dafos!</h1>
      <p class="inline-block text-2xl">
        Age 16. Likes math, science, computer, and everything else. Hungry for knowledge and your
        liver!
      </p>
    </div>
  </div>
  <BotBar />
</template>
