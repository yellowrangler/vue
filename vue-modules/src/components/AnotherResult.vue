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
    import * as types from '../store/types';

    export default {
        computed: { 
            ...mapGetters({
                doubleCounter: types.DOUBLE_COUNTER,
                stringCounter: types.CLICK_COUNTER
                })
        }
    }
</script>