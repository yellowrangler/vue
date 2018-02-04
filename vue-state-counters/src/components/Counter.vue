<template>
    <div>
        <button class="btn btn-primary" @click="increment(100)">Increment</button>
        <button class="btn btn-primary" @click="decrement(50)">Decrement</button>
    </div>
</template>

<script>
    import { mapActions } from 'vuex';
    // i am not going to use the mapMutations - it is essentially like the mapGetters
    export default {
        methods: {
            ...mapActions([
                'increment',
                'decrement'
                ]),
            increment(by) {
                this.$store.dispatch('increment', by);
            },
            decrement(by) {
                this.$store.dispatch('decrement', by);
            }
            // increment() {
            //     // first way
            //     // this.$emit('updated', 1);

            //     // way using vuex with centralized state management
            //     // this.$store.state.counter++;

            //     // way using vuex with centralized state management mutation
            //     this.$store.commit('increment');
            // },
            // decrement() {
            //     // first way
            //     // this.$emit('updated', -1);

            //     // way using vuex with centralized state management
            //     // this.$store.state.counter--;

            //     // way using vuex with centralized state management mutation
            //     this.$store.commit('decrement');
            // }
        }
    }
</script>