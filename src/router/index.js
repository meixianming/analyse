import Vue from "vue"
import Router from "vue-router"
import Index from "~c/Index"
import Async from "~c/async/Index"
import Pattern from "~c/pattern/Index"
import VueIndex from "~c/vue/Index"
import VueCommunication from "~c/vue/communication/Index"
import SlotMixins from "~c/vue/slotmixins/Index"
import LifeCycle from "~c/vue/LifeCycle"
import JsIndex from "~c/js/Index"
import This from "~c/js/This"
import ThrottleDebounce from "~c/js/ThrottleDebounce"
import Optimization from "~c/optimization/Index"
import PreLazy from "~c/optimization/PreLazy"
Vue.use(Router)

//  路由懒加载
// const Foo = () => import('~c/HelloWorld")')
// const loadView = url => {
// 	return () => import( /*webpackChunkName:"view-[request]"*/ `${url}`);
// }

export default new Router({
	mode: "history",
	routes: [{
			path: '/',
			component: Index
		},
		{
			path: '/async',
			component: Async
		}, {
			path: "/pattern",
			component: Pattern
		}, {
			path: "/vue",
			component: VueIndex,
			redirect: "/vue/communication",
			children: [{
					path: "communication",
					component: VueCommunication
				},
				{
					path: "slotmixins",
					component: SlotMixins
				},
				{
					path: "lifecycle",
					component: LifeCycle
				}
			]
		}, {
			path: "/js",
			component: JsIndex,
			redirect: "/js/this",
			children: [{
				path: "this",
				component: This
			}, {
				path: "throttleDebounce",
				component: ThrottleDebounce
			}]
		}, {
			path: "/optimization",
			component: Optimization,
			redirect: "/optimization/prelazy",
			children: [{
				path: "prelazy",
				component: PreLazy
			}]
		}
	]
})