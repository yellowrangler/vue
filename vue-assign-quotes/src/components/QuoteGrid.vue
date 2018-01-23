<template>
    <div class="row">
        <!-- using @click.native allows the click to be handled in this component instead of local one -->
        <app-quote v-for = "(quote, idx) in quotes" @click.native="deleteQuote(idx)">
            {{ quote }}
        </app-quote>
    </div>
</template>

<script>
    import Quote from './Quote.vue'; 

// props come from parent
    export default {
        props: ['quotes'],
        components:  {
            appQuote: Quote
        },
        methods: {
            deleteQuote: function(idx) {
                this.$emit("quoteDeleted", idx);
            }
        }
    }
</script>

<style>

</style>
