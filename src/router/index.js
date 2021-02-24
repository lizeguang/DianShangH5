import Vue from 'vue'
import Router from 'vue-router'
import ZhuYe from '@/pages/shouYe/ZhuYe.vue'
import ShouYe from '@/pages/shouYe/shouYe/ShouYe.vue'
import SyLeiBie from '@/pages/shouYe/syLeiBie/SyLeiBie.vue'

Vue.use(Router)

export default new Router({
		routes: [{
				path: '/home',
				component: ZhuYe,
				meta: {
					title: 'home',
					keepAlive: true
				}
			},
			{
				path: '/shouYe',
				component: ShouYe
			},
			{
				path: '/syLeiBie',
				component: SyLeiBie
			},
			{
				path: '/',
				redirect: '/home'
			}
		]
	},
)

const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
	return originalPush.call(this, location).catch(err => err)
}
