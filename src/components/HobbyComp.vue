<script setup>
const props = defineProps(['title', 'msg', 'image'])
</script>

<template>
  <div
    class="scale-75 hover:scale-90 transition-all text-center bg-slate-800 rounded-lg h-15 w-90 m-10 p-20"
  >
    <h1 class="text-4xl p-4">{{ props.title }}</h1>
    <p class="text-lg">{{ props.msg }}</p>
  </div>
</template>
