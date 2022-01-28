const app = Vue.createApp({
  data() {
    return {
      counter: 10,
      addnum: 5,
      subnum: 4,
      name: "",
      confirmedName: ""
    };
  },
  methods: {
      confirmInput() {
        this.confirmedName = this.name;
      },
      setName(event) {
        this.name = event.target.value;
      },
      submitForm() {
          alert("Submitted");
      },
      addCounter() {
        //   this.counter++;
        this.counter = this.counter + this.addnum;
      },
      reduceCounter() {
        // this.counter--;
        this.counter = this.counter - this.subnum;
    }
  }
});

app.mount('#events');
