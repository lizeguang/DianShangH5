import Vue from 'vue'
import App from './App.vue'
import store from "./store/store.js"
import router from './router'
import 'amfe-flexible'
import Vant from 'vant';
import 'vant/lib/index.css';
import 'vant/lib/icon/local.css';

Vue.use(Vant);

Vue.config.productionTip = false

new Vue({
	router,
	store,
	render: h => h(App),
}).$mount('#app')
