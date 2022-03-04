import { createApp } from 'vue';

import BaseCard from './components/UI/BaseCard.vue';
import BaseButton from './components/UI/BaseButton.vue';
import App from './App.vue';
// I added these to try and get proxy to Work
import axios from 'axios';
import VueAxios from 'vue-axios';

const app = createApp(App);

app.use(VueAxios, axios);

app.component('base-card', BaseCard);
app.component('base-button', BaseButton);

// app.config.globalProperties.axios=axios;

app.mount('#app');
