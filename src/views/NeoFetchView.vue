<template>
	<NavBar />
	<div class="flex items-center w-50 flex-col">
		<div class="desc w-[700px] h-96 m-10">
			<img class="" src="/neofetch.png"/>
		</div>
		<div class="desc flex-col w-[700px]">
			<h1 class="font-bold text-4xl"> My Setup </h1>
			<div class="block p-0">
			<ul class="p-0">
				<li class="desc-text">- Arch Linux</li>
				<li class="desc-text">- i3wm</li>
				<li class="desc-text">- Polybar</li>
				<li class="desc-text">- Alacritty</li>
				<li class="desc-text">- Neovim</li>
			</ul>
			</div>
		</div>
	</div>
	<BotBar />
</template>

<script setup>
	import NavBar from '../components/NavBar.vue';
	import BotBar from '../components/BotBar.vue'
</script>
