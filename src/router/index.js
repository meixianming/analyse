import Vue from "vue"
import Router from "vue-router"
import Index from "@/components/Index"
import Async from "@/components/async/Index"
import Pattern from "@/components/pattern/Index"
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
		}
	]
})