<template>
	<div id="app">
		<!-- main 内容 -->
		<transition>
			<keep-alive :include="cashViews">
				<router-view></router-view>
			</keep-alive>
		</transition>

		<!-- 底部导航 -->
		<transition :name="navName"><footer-nav v-show="isShowNav" ref="navBottom" :activeNavIndex="activeNavIndex"></footer-nav></transition>
	</div>
</template>

<script>
import FooterNav from './components/FooterNav.vue';
import ImagePreview from 'vant';

export default {
	name: 'app',
	components: {
		'footer-nav': FooterNav,
		ImagePreview
	},
	mounted() {
		this.cashViews = this.$store.state.cashViews;
		this.$router.push({
			path: '/home'
		})
		ImagePreview([
		  'https://img.yzcdn.cn/1.jpg',
		  'https://img.yzcdn.cn/2.jpg'
		]);
	},
	data() {
		return {
			mainName: '', // 内容区域动画名
			navName: '', // 导航动画名
			isShowNav: true, // 是否显示底部导航 Tab
			activeNavIndex: 'home', // 底部导航激活下标
			isRouterAlive: true, // 用于刷新页面用
			cashViews: [],
			navTabs: [] // 底部导航
		};
	},
	computed: {
	},
	watch: {
	}
};
</script>

<style scoped lang="scss">
@import '@/global/global.scss';
</style>

<style>
html {
	height: 100vh;
}
body {
	height: 100%;
	background-color: #f2f2f4;
}
#app {
	height: 100%;
	overflow: auto;
}
::-webkit-scrollbar {
	display: none;
}
.van-nav-bar__title {
	font-size: 0.5rem !important;
}
</style>
