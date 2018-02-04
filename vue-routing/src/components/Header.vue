<template>
	<ul class="nav nav-pills">
	<!-- using exact keeps active off for parent  -->
		<router-link to="/" tag="li" active-class="active" exact><a>Home</a></router-link>
		<router-link to="/user" tag="li" active-class="active"><a>User</a></router-link>
	</ul>
</template>