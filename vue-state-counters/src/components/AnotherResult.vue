<template>
    <div>
       <!--  this is how to do getters without map
        <p>Counter is: {{ counter }}</p>
        <p>Number of Clicks: {{ clicks }}</p> -->

        <!--  this is how to do getters with map -->
        <p>Counter is: {{ doubleCounter }}</p>
        <p>Number of Clicks: {{ stringCounter }}</p> 
    </div>
    
</template>

<script>
    import { mapGetters } from 'vuex';
    export default {
        computed: mapGetters([
            'doubleCounter',
            'stringCounter'
            ])
            // following use of getters without map helpers
            // counter() {
            //     // without getters 
            //     // return this.$store.state.counter * 2;
            //     // with getters 
            //     return this.$store.getters.doubleCounter;
            // },
            // clicks() {
            //     return this.$store.getters.stringCounter;
            // }
        // }
    }
</script>