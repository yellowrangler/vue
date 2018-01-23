<template>
	<div>
		<h3>New Quote</h3>
		<button @click="counter += 1">Increase Counter</button>
		<hr>
		<p>{{ counter }}</p>
	</div>
</template>


<script>
	export default {
		data: function () {
			return {
				counter: 0
			}
		},
		destroyed: function() {
			console.log("Destroyed")
		},
		deactivated: function() {
			console.log("deactivated")
		},
		activated: function() {
			console.log("activated")
		}
	}
</script>


<style scoped>
	
</style>