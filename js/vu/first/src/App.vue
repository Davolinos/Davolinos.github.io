<script setup>
import { ref } from 'vue';
const numStr = ref('');
const secNumStr = ref(0);
const butList = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
const oplist = ['+', '-', 'x', '/'];
const result = ref(0)
const op = ref('');
function save(operator) {
				secNumStr.value = parseInt(numStr.value);
				numStr.value = '';
				op.value = operator;
}
function operate() {
				let num = parseInt(numStr.value);
				switch (op.value) {
								case '+':
												result.value = secNumStr.value + num;
												break;
								case '-':
												result.value = secNumStr.value - num;
												break;
								case 'x':
												result.value = secNumStr.value * num;
												break;
								case '/':
												result.value = secNumStr.value / num;
												break;
				}
				numStr.value = result.value.toString();
}
function add(aNum) {
				numStr.value += aNum;
}
</script>

<template>
				<input v-model="numStr" class="input"/>
				<div class="nums">
								<button v-for="but in butList" v-bind:key={but} class="butNum" @click="() => add(but)">{{but}}</button>
								<button v-for="p in oplist" :key={p} class="butNum" @click="() => save(p)">{{p}}</button>
								<button @click="operate" class="butNum">=</button>
				</div>
</template>

<style scoped>
				.input {
								display: block;
				}

				.butNum {
								width: 100px;
								height: 100px;
				}
				.nums {
								width: 20%;
				}
</style>
