<template>
	<div>
		<h3>Edit the User</h3>
	<p>Locale: {{ $route.query.locale }}</p>
	<p>Analytics: {{ $route.query.q }}</p>
	<button @click="confirmed=true" class="btn btn-primary">Confitm</button>
	<div style="height:700px;"></div>
	<p id="importantdata">Very important extra data</p>
	</div>
</template>


<script>
	
	export default {
		data() {
			return {
				confirmed: false
			}
		},
		beforeRouteLeave(to, from, next) {
			// do authentication
			if (this.confirmed) {
				next();
			} else {
				if (confirm('Are you sure')) {
					next();
				} else {
					next(false);
				}
			}
		}
	}
</script>