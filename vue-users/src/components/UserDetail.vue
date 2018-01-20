<template>
    <div class="component">
        <h3>You may view the User Details here</h3>
        <p>Many Details</p>
        <p>User Name: {{ switchName() }} </p>
        <p>User Age: {{ userAge }} </p>
        <button @click="resetName">resetName</button>
        <button @click="resetFn()">resetName</button>
    </div>
</template>

<script>
	import { dataService } from '../main';

	export default {
		props: {
			name: {
				type: String,
				required: true
			},
			resetFn: { type:Function },
			userAge: Number 
		},
		methods: {
			switchName: function() {
				return this.name.split("").reverse().join("");
			},
			resetName: function() {
				this.name = "Tarry";
				this.$emit('nameWasReset', this.name);
			}
		},
		created: function() {
			// dataService.$on('ageWasEdited', function (age) {
			// 	this.userAge = age;
			// });

			// es6 notation for function
			dataService.$on('ageWasEdited', (age) => {
				this.userAge = age;
			});
		}
	}
</script>

<style scoped>
    div {
        background-color: lightcoral;
    }
</style>
