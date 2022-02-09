const app = Vue.createApp({
    data() {
        return {
            friends: [
                {   
                    id: 'manuel', 
                    name: 'Manuel Lorenz', 
                    phone: '123 456 7890', 
                    email: 'manuel@localhost.com' 
                },
                {   
                    id: 'jullie', 
                    name: 'Julie Jones', 
                    phone: '321 456 7890', 
                    email: 'julie@localhost.com' 
                }
            ]
        }
    }
});

app.component('friend-contact', {
    template: `
    <li>
        <h2>{{ friend.name }}</h2>
        <button @click='toggleDetails()'>
        {{ detailsAreVisable ? 'Hide' : 'Show' }} Details</button>
        <ul v-if='detailAreVisable'>
            <li><strong>Phone:</strong> {{ friend.phone }}</li>
            <li><strong>Email:</strong> {{ friend.email }}</li>
        </ul>
    </li>
    `,
    data() {
        return {
            detailAreVisable: false,
            friend: {   
                id: 'manuel', 
                name: 'Manuel Lorenz', 
                phone: '123 456 7890', 
                email: 'manuel@localhost.com' 
            }
               
        }
    },
    methods: {
        toggleDetails() {
            this.detailAreVisable = !this.detailAreVisable;
        }
    }
});

app.mount("#app");