import {createApp} from 'vue'
import './style.css'
import App from './App.vue'
import router from './router';
import store from './store';

// font awesome 配置
import {library, config} from '@fortawesome/fontawesome-svg-core'
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
// 将所有图标添加到库中
library.add(fas, far, fab);
config.familyDefault = "classic";
config.styleDefault = "duotone";

const app = createApp(App);
app.component('font-awesome-icon', FontAwesomeIcon)
app.use(router);
app.use(store);
app.mount('#app');