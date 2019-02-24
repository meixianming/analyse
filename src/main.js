// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import "./session"
import async from "~u/async"
import Login from "~c/login/index"
import VueScroll from "~p/scroll"

import {
	httpWrap
} from './api'

Vue.config.productionTip = false

Vue.prototype.$http = httpWrap;
Vue.prototype.$async = async;
Vue.use(ElementUI);
Vue.use(Login);
Vue.use(VueScroll);

/* eslint-disable no-new */
new Vue({
	el: '#app',
	router,
	components: {
		App
	},
	template: '<App/>'
})