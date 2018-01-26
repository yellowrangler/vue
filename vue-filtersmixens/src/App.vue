<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Filters & Mixins</h1>
                <!-- the | sign passes the value to the filter named -->
                <!-- you can chain filters by passing | char between each filter -->
                <p>{{ text  | toUppercase | toLowercase }}</p>
                <hr>
                <!-- this shows that each component gets copy of fruits. For berries only added to local copy -->
                <button class="btn btn-primary" 
                		@click="fruits.push('Berries')">Add New Item </button>
                <div style="padding-top:15px;">
	                <input v-model="filterText">
	                <ul>
	                	<li v-for="fruit in filteredFruits">{{ fruit }}</li>
	                </ul>
	            	</div>
				<hr>
				<app-list></app-list>	
            </div>
        </div>
    </div>
</template>

<script>
	import List from "./List.vue";
	import { fruitMixin } from "./fruitMixin.js";

    export default {
    	data() {
    		return {
    			text: "Hello There Folks!"
    			// fruits: ['Apple', 'Banana', 'Mango', 'Mellon'],
    			// filterText: ''
    		}
    	},
    	filters: {
    		toUppercase(value){
    			return value.toUpperCase();
    		}
    	},
    	// computed: {
    	// 	filteredFruits() {
    	// 		return this.fruits.filter( (element) => {
    	// 			return element.match(this.filterText);
    	// 		})
    	// 	}
    	// },
    	components: {
    		appList: List
    	},
    	mixins: [fruitMixin],
    	created() {
            console.log('Component App mixin - Created');
        }
    }
</script>

<style>

</style>
