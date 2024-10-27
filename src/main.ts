import {createApp} from 'vue'
import App from './App.vue'
import {router} from "./route";
import './style.css'
import '@arco-design/web-vue/dist/arco.css';
import ArcoVue from '@arco-design/web-vue';
import ArcoVueIcon from '@arco-design/web-vue/es/icon';

const app = createApp(App)
app.use(router)
app.use(ArcoVue);
app.use(ArcoVueIcon);
app.mount('#app')

