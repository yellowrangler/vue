const app = Vue.createApp({
  data() {
    return {
      counter: 10,
      name: "",
      lastName: ""
    //   fullname: ""
    };
  },
  watch: {
      counter(value) {
          if (value > 50)
          {
              this .counter = 0;
          }
      }
    // name(value,prevvalue) {
    //     if (value === '') {
    //         this.fullname = value;
    //     }
    //     else 
    //     {
    //         this.fullname = value + ' ' + 'Cutler';

    //         // alert("previous value = "+prevvalue);
    //     }
        
    // }
  },
  computed: {
      fullname() {
        if (this.name === '' || this.lastName === '')
        {
          return '';
        }
        else
        {
          return this.name + ' ' + this.lastName;
        }
      }
  },
  methods: {
      setName(event) {
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
