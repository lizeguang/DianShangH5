<template>
	<div>
		<van-list v-model="isUpLoading" :finished="upFinished" @load="onLoad" :offset="offset">
			<div class="sub-container">
				<van-skeleton :row="1" row-width="100%" style="height:4rem;width:100%" :loading="loading">
					<van-swipe :autoplay="3000" indicator-color="white">
						<van-swipe-item><van-image width="100%" height="100%" fit="cover" src="https://img.yzcdn.cn/vant/cat.jpeg" /></van-swipe-item>
						<van-swipe-item><van-image width="100%" height="100%" fit="cover" src="https://img.yzcdn.cn/vant/apple-1.jpg" /></van-swipe-item>
						<van-swipe-item><van-image width="100%" height="100%" fit="cover" src="https://img.yzcdn.cn/vant/apple-2.jpg" /></van-swipe-item>
					</van-swipe>
				</van-skeleton>
			</div>

			<van-row style="text-align:center"><span style="font-size:0.6rem">——·团购优惠·——</span></van-row>

			<div class="sub-container">
				<van-grid :border="false" :gutter="10" :column-num="2">
					<van-grid-item v-for="(item, rindex) in tuiJianLieBiao.tuanGou" v-bind:key="rindex" @click="seleceShangPin(item)">
						<van-row style="height:4rem;width:100%">
							<!-- <van-skeleton :row="1" row-width="100%" style="height:4rem;width:100%" class="skeleton-row-img" :loading="loading"> -->
								<van-image width="100%" height="100%" fit="cover" :src="item.img" />
							<!-- </van-skeleton> -->
						</van-row>
						<van-row style="width: 90%;height:calc(100% - 4rem)">
							<van-skeleton :row="2" row-width="100%" style="margin-top: 0.2rem;" :loading="loading">
								<van-row class="shang-pin-name van-multi-ellipsis--l2">{{ item.name }}</van-row>
								<van-row style="margin: 0.3rem">
									<span style="color:red">￥</span>
									<span class="shang-pin-price">{{ item.price }}</span>
									<span class="shang-pin-sellnumber" style="font-size:1.4rem,color:#c1c1c1">{{ item.sellNum }}</span>
								</van-row>
							</van-skeleton>
						</van-row>
					</van-grid-item>
				</van-grid>
			</div>

			<van-row style="text-align:center"><span style="font-size:0.6rem">——·热卖·——</span></van-row>

			<div class="sub-container">
				<van-grid :border="false" :gutter="10" :column-num="2">
					<van-grid-item v-for="(item, rindex) in tuiJianLieBiao.remai" v-bind:key="rindex" @click="seleceShangPin(item)">
						<van-row style="height:4rem">
							<van-skeleton :row="1" row-width="100%" style="height:4rem;width:100%" class="skeleton-row-img" :loading="loading">
								<van-image width="100%" height="100%" fit="cover" :src="item.img" />
							</van-skeleton>
						</van-row>
						<van-row style="width: 90%;">
							<van-skeleton :row="2" row-width="100%" style="margin-top: 0.2rem;" :loading="loading">
								<van-row class="shang-pin-name van-multi-ellipsis--l2">{{ item.name }}</van-row>
								<van-row style="margin: 0.3rem">
									<span style="color:red">￥</span>
									<span class="shang-pin-price">{{ item.price }}</span>
									<span class="shang-pin-sellnumber" style="font-size:1.4rem,color:#c1c1c1">{{ item.sellNum }}</span>
								</van-row>
							</van-skeleton>
						</van-row>
					</van-grid-item>
				</van-grid>
			</div>
		</van-list>
	</div>
</template>

<script>
export default {
	name: 'ShouYe',
	data() {
		return {
			isUpLoading: false, //上拉加载
			upFinished: false, //上拉加载完毕
			offset: 100, //滚动条与底部距离小于 offset 时触发load事件
			searchValue: '',
			loading: true,
			tuiJianLieBiao: {
				tuanGou: [
					{
						bh: 'fas3faf321',
						img: 'https://img.yzcdn.cn/vant/cat.jpeg',
						name: '天山天泉 纯天然无添加整箱 1L瓶装 550ml瓶装 产出地址青藏高原 源料地址为XXXXX',
						price: '10.5',
						sellNum: '2001人付款'
					},
					{
						bh: '2234ff2qer322',
						img: './static/jy.jpg',
						name: '海天酱油、耗油',
						price: '17.5',
						sellNum: '151人付款'
					},
					{
						bh: 'fas3fdse321',
						img: 'https://img.yzcdn.cn/vant/apple-2.jpg',
						name: '天山天泉 纯天然无添加',
						price: '10.5',
						sellNum: '2001人付款'
					},
					{
						bh: '2234ff2qer452',
						img: './static/jy.jpg',
						name: '海天酱油、耗油',
						price: '17.5',
						sellNum: '151人付款'
					}
				],
				remai: [
					{
						bh: 'hhr441fvv3qaa1',
						img:
							'https://image.baidu.com/search/detail?ct=503316480&z=0&ipn=d&word=%E5%B1%B1%E6%B3%89%E6%B0%B4&step_word=&hs=0&pn=7&spn=0&di=53350&pi=0&rn=1&tn=baiduimagedetail&is=0%2C0&istype=2&ie=utf-8&oe=utf-8&in=&cl=2&lm=-1&st=-1&cs=4046906460%2C2217097572&os=1980058507%2C480410560&simid=4225238404%2C688218334&adpicid=0&lpn=0&ln=1572&fr=&fmq=1597222676096_R&fm=result&ic=&s=undefined&hd=&latest=&copyright=&se=&sme=&tab=0&width=&height=&face=undefined&ist=&jit=&cg=&bdtype=0&oriquery=&objurl=http%3A%2F%2Fimg.99114.com%2Fgroup3%2FM00%2F14%2FAC%2FrBADvFpcYRyASsKnAABn9jbIjFI966.jpg&fromurl=ippr_z2C%24qAzdH3FAzdH3Fooo_z%26e3Bll889_z%26e3Bv54AzdH3FviwgrtgAzdH3F8dlc8lmdn_z%26e3Bip4s&gsm=8&rpstart=0&rpnum=0&islist=&querylist=&force=undefined',
						name: '天山天泉 纯天然无添加',
						price: '10.5',
						sellNum: '2001人付款'
					},
					{
						bh: 'aasetxxhurrz2',
						img: 'https://img.yzcdn.cn/vant/apple-2.jpg',
						name: '海天酱油、耗油',
						price: '17.5',
						sellNum: '151人付款'
					}
				]
			}
		};
	},
	mounted() {
		var wx = document.createElement('script');
		wx.type = 'text/javascript';
		wx.src = 'https://res.wx.qq.com/open/js/jweixin-1.4.0.js';
		document.body.appendChild(wx);
	},
	methods: {
		onSearch(val) {
			this.$router.push({
				path: '/search'
			});
		},
		onSearchCancel() {
			Toast('取消');
		},
		onLoad() {
			// 上拉调用此函数
			console.log('上拉');
			this.tuiJianLieBiao.remai.push({
				bh: 'aasetxxhurrz2',
				img: 'https://img.yzcdn.cn/vant/apple-2.jpg',
				name: '海天酱油、耗油',
				price: '17.5',
				sellNum: '151人付款'
			});
			setTimeout(() => {
				this.$toast('加载成功'); //弹出
				this.isUpLoading = false;
				// this.upFinished = true;//加载结束
			}, 500);
		},
		seleceShangPin(item) {
			let j = {
				zpbh: item.bh,
				imgPath: item.img
			};
			wx.miniProgram.postMessage({ data: j });
			this.$router.push({
				path: '/shangPin',
				params: {
					bh: item.bh
				}
			});
		},
		onTabDdTypeClick() {
			this.$router.push({
				path: '/yunDong'
			});
		}
	}
};
</script>

<style scoped lang="scss">
@import '@/global/global.scss';
</style>

<style scoped lang="scss">
body {
	background-color: #ffffff;
}
.container {
	height: calc(100% - 1.33333rem);
	position: relative;
	overflow: auto;
}
.shang-pin-name {
	font-size: 0.36rem;
	font-weight: 900;
	min-height: 0.72rem;
	margin-top: 0.3rem;
}
.shang-pin-price {
	font-size: 0.45rem;
	color: red;
}
.shang-pin-sellnumber {
	margin-left: 0.1rem;
	font-size: 0.1rem;
	color: #c1c1c1;
}

.sub-container {
	background-color: #f4f4f7;
	/deep/ .van-swipe {
		position: relative;
		overflow: hidden;
		cursor: grab;
		height: 4rem !important;
		user-select: none;
	}
	/deep/ .van-swipe-item {
		height: 4rem !important;
		background-color: white;
	}
	/deep/ .van-grid-item__content {
		border-radius: 0.2rem;
	}
	/deep/ .van-grid-item__content--center {
		padding-top: 0rem;
		padding-right: 0rem;
		padding-left: 0rem;
		padding-bottom: 0.2rem;
		overflow: hidden;
	}
	padding: 0.1rem;
	margin: 0.1rem;
}
.skeleton-row-img {
	/deep/ .van-skeleton__row {
		height: 4rem;
		width: 100% !important;
		background: #ffffff;
	}
}
.my-swipe .van-swipe-item {
	color: #fff;
	font-size: 1.6em;
	line-height: 150px;
	text-align: center;
	background-color: #39a9ed;
}
</style>
