<template>
    <div>     
        <h1>Filters & Mixins</h1>
        <input v-model="filterText">
        <ul>
        	<li v-for="fruit in filteredFruits">{{ fruit }}</li>
        </ul>
    </div>
</template>

<script>
    import { fruitMixin } from "./fruitMixin.js";

    export default {
    	mixins: [fruitMixin],
        created() {
            console.log('Component List mixinmixin - Created');
        }
    }
</script>

<style>

</style>
