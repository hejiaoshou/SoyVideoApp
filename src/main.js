import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './vuex/index'
import Mint from "mint-ui";
import comm from "./common/comm";
Vue.use(Mint);
Vue.use(comm);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
