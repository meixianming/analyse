import Vue from "vue"
import Router from "vue-router"
import Index from "@/components/Index"
import Async from "@/components/async/Index"
import Pattern from "@/components/pattern/Index"
import VueIndex from "@/components/vue/Index"
import VueCommunication from "@/components/vue/communication/Index"
import SlotMixins from "@/components/vue/slotmixins/Index"
import LifeCycle from "@/components/vue/LifeCycle"
import JsIndex from "@/components/js/Index"
import This from "@/components/js/This"
import ThrottleDebounce from "@/components/js/ThrottleDebounce"
Vue.use(Router)

//  路由懒加载
// const Foo = () => import('@/components/HelloWorld")')
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
		}
	]
})