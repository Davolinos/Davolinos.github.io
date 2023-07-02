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
				<img class="rounded-3xl" src="/flask.png"/>
			</div>
			<div class="desc">
				<p class="desc-text">I also use flask for my back end project. Sometimes i use Django or Node js, but Flask is my best.</p>
			</div>
		</div>
  </div>
</template>

<script setup>
import NavBar from '../components/NavBar.vue'
</script>
