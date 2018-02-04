<template>
	<div>
		<h1>The User Page</h1>
		<hr>
		<button @click="navigateToHome" class="btn btn-primary">Go to home</button>
		<hr>
		<router-view></router-view>
	</div>
</template>


<script>
	
	export default {
		methods: {
			navigateToHome() {
				// this is one way to do this
				// this.$router.push( "/" );

				// so is this with named routes
				this.$router.push( { name: 'home' } );
			}
		}
	}
</script>