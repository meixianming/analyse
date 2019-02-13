import Vue from "vue"
import Router from "vue-router"
import HelloWorld from "@/components/HelloWorld"
import Await from "@/components/async/Await"
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
			component: HelloWorld
		},
		{
			path: '/await',
			component: Await
		}
	]
})