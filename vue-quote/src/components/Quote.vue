<template>
	<div>
		<div class="title">
			<slot name="title"></slot>
			<span style="color: #ccc"><slot name="subtitle">Default Subtitle</slot></span>
		</div>
		<div>
			<slot name="content"></slot>
		</div>
	</div>
</template>


<script>
	export default {
	}
</script>


<style scoped>
	div {
		border: 1px solid #ccc;
		box-shadow: 1px 1px 2px black;
		padding: 30px;
		margin: 30px auto;
		text-align: center;
	}

/*The styles of the child are used not those of the parent for the slot html*/
	h2 {
		color: red;
	}

	.title {
		font-style: italic;
	}
</style>