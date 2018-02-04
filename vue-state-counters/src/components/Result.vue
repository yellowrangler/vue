<template>
    <p>Counter is: {{ counter }}</p>
</template>

<script>
    export default {
    	// dont need props if using state via vuex
     //    props: ['counter']
     	computed: {
     		counter() {
     			// without getters
     			// return this.$store.state.counter * 2;
     			// with getters 
     			return this.$store.getters.doubleCounter;
     		}
     	}
    }
</script>