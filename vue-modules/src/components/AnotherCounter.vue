<template>
    <div>
        <button class="btn btn-primary" @click="asyncIncrement({ by:50, duration:500 })">Increment</button>
        <button class="btn btn-primary" @click="asyncDecrement({ by:50, duration:500 })">Decrement</button>
    </div>
</template>

<script>
    import { mapActions } from 'vuex';

    export default {
        methods: {
            ...mapActions([
                'asyncIncrement',
                'asyncDecrement'
                ])
            // increment() {
            //     // first way
            //     // this.$emit('updated', 1);

            //     // way using vuex with centralized state management
            //     this.$store.state.counter++;
            // },
            // decrement() {
            //     // first way
            //     // this.$emit('updated', -1);

            //     // way using vuex with centralized state management
            //     this.$store.state.counter--;
            // }
        }
    }
</script>