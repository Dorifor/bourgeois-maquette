import { createApp } from 'vue'
import App from './App.vue'

import BalmUI from 'balm-ui'; // Official Google Material Components
import BalmUIPlus from 'balm-ui-plus'; // BalmJS Team Material Components
import 'balm-ui-css';
import router from './router'

const app = createApp(App).use(router);

app.use(BalmUI, {
  $theme: {
    primary: '#75be00'
  }
});
app.use(BalmUIPlus);

app.mount('#app')
