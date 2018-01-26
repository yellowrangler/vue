import Vue from 'vue'
import App from './App.vue'

Vue.filter('toLowercase', function (value) {
	return value.toLowerCase();
})

// global mixins are to be used with caution as they fire on every componet of app
Vue.mixin({
	created() {
		console.log('Global mixin - Created');
	}
})
new Vue({
  el: '#app',
  render: h => h(App)
})
