import { createApp } from 'vue';
import ElementPlus from 'element-plus';
import './style.css';
import App from './App.vue';

import ElastalertTimePicker from './components/ElastalertTimePicker.vue';

const app = createApp(App);
app.component('ElastalertTimePicker', ElastalertTimePicker);
app.use(ElementPlus);
app.mount('#app');
