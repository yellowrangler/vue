<template>
<div class="row">
	<div class="col-sm-12">
		<h3>Quotes Added</h3>
		<div class="progress">
			<div class="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" :style="{width: (quoteCount / maxQuotes) * 100 + '%'}">
			{{ quoteCount}} of {{ maxQuotes}}
			</div>
		</div>
	</div>
</div>
</template>

<script>
// props come from parent
    export default {
    	props: [
    		'quoteCount',
    		'maxQuotes'
    	]
    }
</script>

<style>
	.panel-body {
		font-family: 'Arizonia', cuesive;
		font-size: 24px;
		color: #6e6e6e;
	}

	.quote {
		cursor: pointer;
	}

	.quote:hover {
		background-color: #ffe2e2
	}
</style>
