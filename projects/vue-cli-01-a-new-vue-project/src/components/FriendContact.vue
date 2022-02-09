<template>
    <li>
        <h2>{{ name }} {{ this.isFavorite  ? '(Favorite)' : '' }}</h2>
        <button @click='toggleDetails'>
            {{ detailsAreVisable ? 'Hide' : 'Show' }} Details
        </button>
        <button @click='toggleFavorite'>
            Toggle Favorite
        </button>
        <ul v-if="detailsAreVisable">
            <li><strong>Phone:</strong> {{ phoneNumber }}</li>
            <li><strong>Email:</strong> {{ emailAddress }}</li>
        </ul>
    </li>
</template>

<script>
export default {
    // props: [
    //     'name',
    //     'phoneNumber',
    //     'emailAddress',
    //     'isFavorite'
    // ],
    props: {
        id: {
            type: String,
            required: true
        },
        name: {
            type: String,
            required: true
        },
        phoneNumber: {
            type: String,
            required: true
        },
        emailAddress: {
            type: String,
            required: true
        },
        isFavorite: {
            type: Boolean,
            required: false,
            default: false
            // validator: function(value) {
            //     return value === '1' || value === '0';
            // }
        }
    },
    emits: [
        'toggleFavorite'
    ],
    // emits: {
    //     'toggleFavorite': function (id) {  
    //         if (id) {
    //             return true;
    //         } else {
    //             console.warn('Must pass id to toggleFavorites');
    //             return false;
    //         }
    //     }
    // },
    data() {
        return {
            detailsAreVisable: false
        };
    },
    methods: {
        toggleDetails() {
            this.detailsAreVisable = !this.detailsAreVisable;
        },
        toggleFavorite() 
        {
            // this.favorite = !this.favorite;
            this.$emit('toggle-favorite', this.id);
        }
    }
};
</script>