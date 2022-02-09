const app = Vue.createApp({
    data() {
        return {
            boxASelected: false,
            boxBSelected: false,
            boxCSelected: false
        }
    },
    methods: {
        boxSelected(box) {
            switch (box) {
                case 'A':
                    this.boxASelected = !this.boxASelected;
                    break;

                case 'B':
                    this.boxBSelected = !this.boxBSelected;
                    break;  

                case 'C':
                    this.boxCSelected = !this.boxCSelected;
                    break;    
            }

        }
    },
    computed: {
        boxAClasses(box) {
            return { active: this.boxASelected };
        },
        boxBClasses(box) {
            return { active: this.boxBSelected };
        },
        boxCClasses(box) {
            return { active: this.boxCSelected };
        }
    }

});

app.mount("#styling");