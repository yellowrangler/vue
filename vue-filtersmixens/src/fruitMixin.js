export const fruitMixin = {
	data() {
		return {
			fruits: ['Apple', 'Banana', 'Mango', 'Mellon'],
			filterText: ''
		}
	},
	computed: {
		filteredFruits() {
			return this.fruits.filter( (element) => {
				return element.match(this.filterText);
			})
		}
	},
	created() {
		console.log('Local mixin - Created');
	}
}