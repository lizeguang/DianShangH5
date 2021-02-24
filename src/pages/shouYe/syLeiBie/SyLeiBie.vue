<template>
	<div>
		<van-list v-model="isUpLoading" :finished="upFinished" @load="onLoad" :offset="offset">
			<van-row class="sub-container">
				<van-grid :border="false" column-num="5">
					<van-grid-item v-for="(item, index) in subTypeTitle" v-bind:key="item.bh" @click="collectionClick(index)">
						<van-row style="height:1rem"><van-image width="100%" height="100%" fit="cover" src="https://img.yzcdn.cn/vant/cat.jpeg" /></van-row>
						<van-row>{{ item.name }}</van-row>
					</van-grid-item>
					<van-grid-item @click="collectionClick">
						<van-row><van-icon name="other-pay" size="1rem" /></van-row>
						<van-row>更多</van-row>
					</van-grid-item>
				</van-grid>
			</van-row>

			<van-row class="sub-container-lunbo">
				<van-swipe :autoplay="3000" indicator-color="white" style="height: 3rem">
					<van-swipe-item><van-image width="100%" height="100%" fit="cover" src="https://img.yzcdn.cn/vant/cat.jpeg" /></van-swipe-item>
					<van-swipe-item><van-image width="100%" height="100%" fit="cover" src="https://img.yzcdn.cn/vant/apple-1.jpg" /></van-swipe-item>
					<van-swipe-item><van-image width="100%" height="100%" fit="cover" src="https://img.yzcdn.cn/vant/apple-2.jpg" /></van-swipe-item>
				</van-swipe>
			</van-row>

			<van-row class="sub-container">
				<van-row><span style="font-size: 0.6rem">天天特卖爆款抢购</span></van-row>
				<van-grid :border="false" column-num="3">
					<van-grid-item v-for="(item, index) in tuiJianList" v-bind:key="item.bh" @click="seleceShangPin(item)">
						<van-row>
							<van-row style="height:2rem"><van-image width="100%" height="100%" fit="cover" src="https://img.yzcdn.cn/vant/cat.jpeg" /></van-row>
							<van-row class="span-spName-short">
								{{ item.name }}
							</van-row>
							<van-row>
								<van-tag plain type="warning">{{ item.youHui }}</van-tag>
							</van-row>
							<van-row>
								<span class="span-price">￥{{ item.price }}</span>
								<span class="span-sellnum">已售{{ item.yiMai }}</span>
							</van-row>
						</van-row>
					</van-grid-item>
				</van-grid>
			</van-row>

			<van-row><div style="font-size: 0.4rem;text-align: center;">—— 更多热卖 ——</div></van-row>

			<van-row class="sub-container">
				<van-grid :border="false" column-num="2">
					<van-grid-item v-for="(item, index) in reMaiList" v-bind:key="item.bh" @click="seleceShangPin(item)">
						<van-row>
							<van-row><van-image width="100%" height="100%" fit="cover" src="https://img.yzcdn.cn/vant/cat.jpeg" /></van-row>
							<van-row>
								<span class="span-spName-long">{{ item.name }}</span>
							</van-row>
							<van-row>
								<van-tag plain type="warning">{{ item.youHui }}</van-tag>
							</van-row>
							<van-row>
								<span class="span-price">￥{{ item.price }}</span>
								<span class="span-sellnum">已售{{ item.yiMai }}</span>
							</van-row>
						</van-row>
					</van-grid-item>
				</van-grid>
			</van-row>
		</van-list>
	</div>
</template>

<script>
export default {
	name: 'YunDong',
	data() {
		return {
			isUpLoading: false, //上拉加载
			upFinished: false, //上拉加载完毕
			offset: 100, //滚动条与底部距离小于 offset 时触发load事件
			active: 0,
			subTypeTitle: [
				{ bh: '15s244s', imgPath: '', name: '跑步鞋' },
				{ bh: '2t2234r', imgPath: '', name: '休闲鞋' },
				{ bh: '126t3qf', imgPath: '', name: '篮球鞋' },
				{ bh: '2352335', imgPath: '', name: '泳衣' },
				{ bh: '135ra2f', imgPath: '', name: '臂力棒' },
				{ bh: '1235r2f', imgPath: '', name: '助力带' },
				{ bh: '2463ysv', imgPath: '', name: '腰包' },
				{ bh: '1235125', imgPath: '', name: '弹力绳' },
				{ bh: '125r12r', imgPath: '', name: '哑铃' }
			],
			tuiJianList: [
				{
					bh: '65as4df6s',
					imgPath: '',
					name: '跑步运动急死我借我一天进去进去哦外籍人',
					youHui: '1件减1元',
					price: 9.9,
					yiMai: 156
				},
				{
					bh: 'adfagasf',
					imgPath: '',
					name: '家用健身锻练离开我就热气球文请问',
					youHui: '49减3元',
					price: 6.9,
					yiMai: 9874
				},
				{
					bh: '22436tygs',
					imgPath: '',
					name: 'jsiisisisieueifijhfiuwheifnuwhfuwfhmioquwfhcoqwuhrowqmiwrh',
					youHui: '1件减1元',
					price: 3.9,
					yiMai: 654
				}
			],
			reMaiList: [
				{
					bh: '65as4df6s',
					imgPath: '',
					name: '跑步运动隐形XXXXXXXXYYYWerafa e er qwq qqwfqwefqwfq wfq qwWYYWYXXXX',
					youHui: '1件减1元',
					price: 9.9,
					yiMai: 156
				},
				{
					bh: 'adfagasf',
					imgPath: '',
					name: '家用健身锻练XXXXXXXXX',
					youHui: '49减3元',
					price: 6.9,
					yiMai: 9874
				},
				{
					bh: '22436tygs',
					imgPath: '',
					name: '鱼钩成品套',
					youHui: '1件减1元',
					price: 3.9,
					yiMai: 654
				}
			]
		};
	},
	mounted() {
		console.log(this.allSpType[0].lxsj);
	},
	methods: {
		onPageBackClick() {
			let historyPageList = this.$store.state.historyPageList;
			let backPagePath = historyPageList[historyPageList.length - 1];
			this.$router.push({
				path: backPagePath
			});
		},
		reflashPage(name) {
			console.log(name);
		},
		onLoad() {
			// 上拉调用此函数
			this.reMaiList.push({
				bh: 'adfagasf',
				imgPath: '',
				name: '家用健身锻练',
				youHui: '49减3元',
				price: 6.9,
				yiMai: 9874
			});
			setTimeout(() => {
				this.$toast('加载成功'); //弹出
				this.isUpLoading = false;
				// this.upFinished = true;//加载结束
			}, 500);
		},
		seleceShangPin(item) {
			this.$router.push({
				path: '/shangPin',
				params: {
					bh: item.bh
				}
			});
		},
		collectionClick() {
			this.$router.push({
				path: '/searchResult'
			});
		}
	}
};
</script>

<style scoped lang="scss">
.container {
	background: #f4f4f7;
	height: calc(100% - 1.33333rem);
	position: relative;
	overflow: auto;
}
.sub-container {
	margin-right: 0.2rem;
	margin-left: 0.2rem;
	margin-top: 0.2rem;
	padding: 0.2rem;
	font-size: 0.35rem;
	border-radius: 0.3rem;
	background-color: #ffffff;
	/deep/ .van-grid-item__content--center {
		padding-top: 0.3rem;
		padding-bottom: 0rem;
	}
}
.sub-container-lunbo {
	margin-right: 0.2rem;
	margin-left: 0.2rem;
	margin-top: 0.2rem;
}
.span-price {
	color: red;
	font-size: 0.4rem;
}
.span-sellnum {
	font-size: 0.1rem;
	color: #b3b3b3;
}
.span-spName-short{
	display: -webkit-box;
	-webkit-box-orient: vertical;
	-webkit-line-clamp: 1;
	overflow: hidden;
	word-break:break-all;
}
.span-spName-long{
	display: -webkit-box;
	-webkit-box-orient: vertical;
	word-wrap:break-word;
	-webkit-line-clamp: 2;
	overflow: hidden;
	word-break:break-all;
}
</style>
