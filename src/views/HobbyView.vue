<script setup>
import HobbyComp from '../components/HobbyComp.vue'
import NavBar from '../components/NavBar.vue'
import BotBar from '../components/BotBar.vue'
</script>

<template>
  <NavBar />
  <div class="flex flex-col items-center">
    <HobbyComp
      title="Physics"
      image="house"
      msg="When we were kids, we always curious about out nature. What is galaxy? Why things fall? How does electricity work? And that's where physics come. It answers us with an objective truth that we don't have to doubt."
    />
    <font-awesome-icon icon="atom" class="scale-150 w-20" style="color: #e01b24" />
    <HobbyComp
      title="Mathematics"
      msg="Have you ever want to be a detective? Solving dificult cases and feeling like a genius. If so, you might like Mathematics! It's like a puzzle, and it's like playing detectives. Most importantly, it's fun!"
    />
    <font-awesome-icon icon="square-root-variable" class="w-20 scale-150" style="color: #ff7800" />
    <HobbyComp
      title="Coding"
      msg="With code, you can build things. Just like with legos, except you don't build a building. you build something abstract, something never been thought about. That's why it's cool."
    />
    <font-awesome-icon icon="terminal" class="m-10 w-20 scale-150" style="color: #f6f5f4" />
  </div>
  <BotBar />
</template>
