export default {
  increment(state) {
    state.counter += state.incrementNbr;
  },
  increase(state, payload) {
   console.log(state);
    state.counter = state.counter + payload.value;
  }
};