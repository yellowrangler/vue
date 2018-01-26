<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Built-in Directives</h1>
					<p v-text="'Some text'"></p>
					<p v-html="'<strong>Some strong text</strong>'"></p>
            </div>
        </div>
        <hr>	
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Custom Directives</h1>
                <!-- binding without colon passes as value - binding with colon adds parameter (name is after column) -->
                <!-- adding a . after parm is modifier and is passed back in the modifier array -->
				<p v-highlight:background.delayed="'red'">Color this</p>
<!-- 				<p v-local-highlight:background.delayed.blink="'lightblue'">Color this, too</p> -->
				<p v-local-highlight:background.delayed.blink="{ mainColor: 'red', secondColor: 'lightblue', delay: 500 }">Color this, too</p>
            </div>
        </div>
    </div>
</template>

<script> 
    export default {
    	directives: {
    		'local-highlight': {
    			bind(el, binding, vnode) {
    				var delay = 0;
					if (binding.modifiers['delayed']) {
						delay = 3000;
					}
					if (binding.modifiers['blink']) {
						let mainColor = binding.value.mainColor;
						let secondColor = binding.value.secondColor;
						let currentColor = mainColor;
						
						delay = binding.value.delay;

						setTimeout ( () => {
							setInterval( () => {
								currentColor = mainColor == currentColor ? secondColor : mainColor;

								if (binding.arg == 'background')
								{
									el.style.backgroundColor = currentColor;
								}
								else
								{
									el.style.color = currentColor;
								}
							},  1000);
							
						}, binding.value.delay);
					}
					else {
						setTimeout ( () => {
							if (binding.arg == 'background')
							{
								el.style.backgroundColor = binding.value;
							}
							else
							{
								el.style.color = binding.value;
							}
						}, binding.value.delay);
					}

						
				}
    		}
    	}
    }
</script>

<style>

</style>
