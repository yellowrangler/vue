<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <button @click="selectedComponent = 'appQuote'">Quote</button>
                <button @click="selectedComponent = 'appAuthor'">Author</button>
                <button @click="selectedComponent = 'appNew'">New</button>
                <hr>
                {{ selectedComponent }}
                <!-- <app-quote>
                    <h2 slot="title">{{ quoteTitle }}</h2><span slot="subtitle">Passed Subtitle</span>
                    <p slot="content">A wonderful quote</p>
                </app-quote> -->

                <!-- This is an example of dynamic components -->
                <!-- keep-alive keeps component values from being destroyed -->
                <keep-alive>
                    <component :is="selectedComponent"></component>
                </keep-alive>
                
            </div>
        </div>
    </div>
</template>

<script>
    import Quote from "./components/Quote.vue";
    import Author from "./components/Author.vue";
    import New from "./components/New.vue";

    export default {
        data: function() {
            return {
                quoteTitle: 'This Quote',
                selectedComponent: 'appQuote'
            }
        },
       components: {
        appQuote: Quote,
        appAuthor: Author,
        appNew: New
       },
       methods: {

       }
    }
</script>

<style>
   
</style>
