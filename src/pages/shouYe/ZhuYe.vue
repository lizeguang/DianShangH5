<template>
	<div class="container" id="container">
		<div style="height: 2.4rem;position:relative;margin-bottom: 0.2rem;">
		  <van-row style="position:fixed">
		    <van-row><van-search show-action placeholder="请输入搜索关键词" @click="onSearch" /></van-row>
			<van-row>
				<van-tabs v-model="dingDanTypeActive" @click="onTabDdTypeClick" sticky>
					<van-tab title="首页" name="shouYe"></van-tab>
					<van-tab title="运动" name="yunDong"></van-tab>
					<van-tab title="医用" name="yiYong"></van-tab>
					<van-tab title="食品" name="shiPin"></van-tab>
					<van-tab title="百货" name="baiHuo"></van-tab>
					<van-tab title="衣服" name="yiFu"></van-tab>
					<van-tab title="文具" name="wenJu"></van-tab>
				</van-tabs>
			</van-row>
		   </van-row>
		</div>
		
		<div style="height:calc(100% - 2.6rem);overflow: auto;" ref="scrollDiv">
			<component :is="zYNrComponent.curComp" ref="mainContent" :name="zYNrComponent.curComp"></component>
		</div>
		
	</div>
</template>

<script>
import ShouYe from '@/pages/shouYe/shouYe/ShouYe.vue';
import SyLeiBie from '@/pages/shouYe/syLeiBie/SyLeiBie.vue';

export default {
	name: 'ZhuYe',
	components: {
		SyLeiBie,
		ShouYe
	},
	beforeRouteEnter(to, from, next) {
		next();
	},
	activated() {
		this.$nextTick(() => {
			this.$refs.scrollDiv.scrollTop = this.$store.state.pageScrollTop['zhuYe']
		})
	},
	data() {
		return {
			dingDanTypeActive: 'shouYe',
			zYNrComponent: {
				curComp: 'ShouYe',
				compList: ['ShouYe', 'SyLeiBie']
			},
			scrollTop: 250
		};
	},
	methods: {
		onSearch(val) {
			this.$router.push({
				path: '/search'
			});
		},

		onTabDdTypeClick(name, title) {
			this.dingDanTypeActive = name;
			if (name !== 'shouYe') {
				this.zYNrComponent.curComp = 'SyLeiBie';
				this.$nextTick(() => {
					this.$refs.mainContent.reflashPage(name);
				});
			} else {
				this.zYNrComponent.curComp = 'ShouYe';
			}
		}
	}
};
</script>

<style scoped lang="scss">
.body {
	background-color: #f2f2f4;
}
.container {
	height: calc(100% - 1.33333rem);
	position: relative;
	overflow: hidden;
}
.shang-pin-name {
	font-size: 0.03em;
}
.shang-pin-price {
}
.shang-pin-sellnumber {
	font-size: 0.01em;
}

.sub-container {
	/deep/ .van-swipe {
		position: relative;
		overflow: hidden;
		cursor: grab;
		height: 250px !important;
		user-select: none;
	}
	/deep/ .van-swipe-item {
		height: 250px !important;
		background-color: white;
	}
	padding:0.1rem;
	margin: 0.1rem
}

.my-swipe .van-swipe-item {
	color: #fff;
	font-size: 1.6em;
	line-height: 4rem;
	text-align: center;
	background-color: #39a9ed;
}
</style>
