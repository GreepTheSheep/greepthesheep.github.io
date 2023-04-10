import { createApp } from 'vue';
import Storage from 'vue-ls'
import App from './App.vue';
import router from './router';

import 'bulma/bulma.sass';
import 'fork-awesome/css/fork-awesome.min.css';

const app = createApp(App);

app.use(router);
app.use(Storage, {
    namespace: 'vuejs__',
    name: 'ls',
    storage: 'local',
});

app.mount('#app');
