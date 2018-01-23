<template>
    <div class="container">
    	<app-header :quoteCount="quotes.length" :maxQuotes="maxQuotes" @quoteAdded="newQuote($event)"></app-header>
    	<app-new-quote @quoteAdded="newQuote($event)"></app-new-quote>
    	<app-quote-grid :quotes="quotes" @quoteDeleted="deleteQuote($event)"></app-quote-grid>
    	<div class="row">
    		<div class="col-sm-12 text-center">
    			<div class="alert alert-info">Info: Clickon a Quote to Delete it!</div>
    		</div>
    	</div>
    </div>
</template>

<script>
	import QuoteGrid from './components/QuoteGrid.vue'; 
	import NewQuote from './components/NewQuote.vue'; 
	import Header from './components/Header.vue'; 

    export default {
        data: function() {
        	return {
        		quotes: [
        			'Just a Quote to see somthing'
        			],
        		maxQuotes: 10
	    	}
    	},
    	components:  {
    		appQuoteGrid: QuoteGrid,
    		appNewQuote: NewQuote,
    		appHeader: Header
    	},
    	methods: {
    		// vuejs sends automatically event object associated with $emit 
    		newQuote: function(quote) {
    			if (this.quotes.length < this.maxQuotes)
    			{
    				this.quotes.push(quote);
    			}
    			else
    			{
    				return alert("You have reached your Quote Limit of "+ this.maxQuotes);
    			}
    		},
    		deleteQuote: function(idx) {
    			if (this.quotes.length > 0)
    			{
    				this.quotes.splice(idx, 1);
    			}
    			else
    			{
    				alert("You have nothing to delete!");
    			}
    		}

    	}

    }
</script>

<style>
</style>
