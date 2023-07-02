<template>
	<NavBar />
	<div class="flex justify-center items-center">
		<div class="desc inline-bloc">
			<img class="rounded-3xl h-52 w-96" src="/bandung.jpg" />
		</div>
		<div class="desc inline-block">
			<img class="rounded-3xl h-52 w-52" src="/bandung2.jpeg" />
		</div>
	<div class="desc">
		<h1 class="text-5xl">Bandung, West Java. Located in Indonesia, is a place that I calls home.</h1>
	</div>
	</div>
	<BotBar />
</template>

<script setup>
	import NavBar from '../components/NavBar.vue';
	import BotBar from '../components/BotBar.vue';
</script>

