import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { Button , RadioGroup, Radio , Checkbox, CheckboxGroup ,Field  } from 'vant';

import 'vant/lib/index.css'
Vue.config.productionTip = false
Vue.use(Button)
Vue.use(Radio);
Vue.use(RadioGroup);
Vue.use(Checkbox);
Vue.use(CheckboxGroup);
Vue.use(Field);
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
