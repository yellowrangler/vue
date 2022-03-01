export default {
  increment(context) {
    console.log(context);

    setTimeout(function(){
      context.commit('increment');
    }, 2000);
  },
  increase(context, payload) {
    setTimeout(function(){
      context.commit('increase', payload);
    }, 2000);
  }
};