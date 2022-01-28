const app = Vue.createApp({
  data() {
    return {
      counter: 10,
      name: ""
    };
  },
  methods: {
      setName(event, secondName) {
        this.name = event.target.value;
      },
      addCounter(num) {
        //   this.counter++;
        this.counter = this.counter + num;
      },
      reduceCounter(num) {
        // this.counter--;
        this.counter = this.counter - num;
    },
    resetInput() {
        this.name = "";
    }
  }
});

app.mount('#events');
