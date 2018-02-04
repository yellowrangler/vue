<template>
	<div>
		<h3>Some User Details</h3>
		<p>User Loaded has ID: {{ $route.params.id }}</p>
		<router-link 
			tag="button" 
			class="btn btn-primary" 
			:to="link">
			Edit User</router-link>
			<br /><br />
	</div>
</template>

<script>
	export default {
		data() {
			return {
				link: { 
					name: 'userEdit', 
					params: { 
						id: this.$route.params.id 
					}, 
					query: { 
						locale: 'en', 
						q: '100'
					},
					hash: '#importantdata' 
				}
			}
		},
		beforeRouteEnter(to, from, next) {
			// do authentication
			next();
		}
	}
	
</script>