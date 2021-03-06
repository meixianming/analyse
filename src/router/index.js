import Vue from "vue"
import Router from "vue-router"
import Index from "~c/Index"
import Async from "~c/async/Index"
import Pattern from "~c/pattern/Index"

import VueIndex from "~c/vue/Index"
import VueCommunication from "~c/vue/communication/Index"
import SlotMixins from "~c/vue/slotmixins/Index"
import LifeCycle from "~c/vue/LifeCycle"
import Vdom from "~c/vue/Vdom"

import JsIndex from "~c/js/Index"
import This from "~c/js/This"
import ThrottleDebounce from "~c/js/ThrottleDebounce"
import Optimization from "~c/optimization/Index"
import PreLazy from "~c/optimization/PreLazy"
import Algorithm from "~c/algorithm/Index"

import CSS3 from "~c/css3/Index"
import Transition from "~c/css3/Transition"
import Transform from "~c/css3/Transform"
import Animation from "~c/css3/Animation"
import Border from "~c/css3/Border"
import Background from "~c/css3/Background"
import Column from "~c/css3/Column"
import Grid from "~c/css3/Grid"
import Flex from "~c/css3/Flex"
import Fc from "~c/css3/Fc"
import TextOverflow from "~c/css3/TextOverflow"

import Layout from "~c/Layout/Index"
import Grail from "~c/Layout/Grail"
import DoubleWings from "~c/Layout/DoubleWings"

import HTML5 from "~c/html5/Index"
import Canvas from "~c/html5/Canvas"

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
				},
				{
					path: "vdom",
					component: Vdom
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
		}, {
			path: "/algorithm",
			component: Algorithm
		},
		{
			path: "/css3",
			component: CSS3,
			redirect: "/css3/transition",
			children: [{
				path: "transition",
				component: Transition
			}, {
				path: "transform",
				component: Transform
			}, {
				path: "animation",
				component: Animation
			}, {
				path: "border",
				component: Border
			}, {
				path: "background",
				component: Background
			}, {
				path: "column",
				component: Column
			},{
				path: "grid",
				component: Grid
			},{
				path: "flex",
				component: Flex
			},{
				path: "fc",
				component: Fc
			},{
				path: "text-overflow",
				component: TextOverflow
			}]
		},
		{
			path: "/html5",
			component: HTML5,
			redirect: "/html5/canvas",
			children: [{
				path: "canvas",
				component: Canvas
			}]
		},
		{
			path: "/layout",
			component: Layout,
			redirect: "/layout/grail",
			children: [{
				path: "grail",
				component: Grail
			},{
				path: "double-wings",
				component: DoubleWings
			}]
		}
	]
})