<template>
  <NavBar />
  <div class="flex flex-col items-center m-20">
    <div class="desc-container">
      <div class="desc w-40 h-40">
        <img src="/vue.png" />
    	</div>
			<div class="desc p-10">
				<p class="desc-text">I primarily use Vue js for front end projects. Although sometimes i use React, but Vue is my personal favourite.</p>
    	</div>
  	</div>
		<div class="desc-container">
			<div class="desc">
				<img class="rounded-3xl w-100 h-40" src="/flask.png"/>
			</div>
			<div class="desc">
				<p class="desc-text">I also use flask for my back end project. Sometimes i use Django or Node js, but Flask is my best.</p>
			</div>
		</div>
		<div class="desc-container">
			<div class="desc">
				<img class="w-40 h-40" src="/godot.png" />
			</div>
			<div class="desc">
				<p class="desc-text`">I mostly use Godot for game development and i use GDScript for the scripting. Why Godot? Because the FOS in daFOS stands for Free and Open Source.</p>
			</div>
		</div>
  </div>
	<BotBar />	
</template>


<script setup>
import NavBar from '../components/NavBar.vue';
import BotBar from '../components/BotBar.vue';
</script>
