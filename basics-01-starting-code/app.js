const app = Vue.createApp({
    data() {
        return {
            courseGoalA: 'Finish the course and learn Vue',
            courseGoalB: 'Master Vue and build amazing apps',
            vueLink: "https://vuejs.org/"
        };
    },
    methods: {
        // This could also be written as outputGoal() the 2 wasys are equivolent
        // see data() same thing there could be written as data: function() etc
        outputGoal: function() {
            const randomNumber = Math.random();
            if (randomNumber < 0.5) {
                return this.courseGoalA;
            } 
            else 
            {
                return this.courseGoalB;
            }
        }
    } 
});

app.mount('#user-goal');