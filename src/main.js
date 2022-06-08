import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import "bootstrap";
import Loading from 'vue-loading-overlay';
// Import stylesheet
import 'vue-loading-overlay/dist/vue-loading.css';
// Init plugin
import "bootstrap/dist/css/bootstrap.min.css";
import { library } from '@fortawesome/fontawesome-svg-core'
import { faAngleRight,faQuoteRight,faStar,faTrash, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import jQuery from "jquery"
import router from "./router";
import VueNumberInput from '@chenfengyuan/vue-number-input';
import FlashMessage from '@smartweb/vue-flash-message';

Vue.use(FlashMessage);

Vue.use(VueNumberInput);
// Or
Vue.component(VueNumberInput.name, VueNumberInput);
// Or
Vue.component('vue-number-input', VueNumberInput);

window.$=window.jQuery=jQuery;

library.add(faAngleRight,faQuoteRight,faStar,faTrash, faShoppingCart)
Vue.use(Loading);
Vue.component('pagination', require('laravel-vue-pagination'));
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.use(VueAxios, axios)
Vue.config.productionTip = false
Vue.filter('truncate', function (text, length, suffix) {
  if (text.length > length) {
    return text.substring(0, length) + suffix;
  } else {
    return text;
  }
});
new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
