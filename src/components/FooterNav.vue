<template>
	<van-tabbar v-model="active">
		<van-tabbar-item v-for="(item, index) in tabbarItemList" :name="item.name">
			<span>{{item.label}}</span>
			<template #icon="props">
				<van-icon :name="item.icon" />
			</template>
		</van-tabbar-item>
	</van-tabbar>
</template>

<script>
export default {
	data() {
		return {
			active: 'home',
			tabbarItemList: [
				{
					name: "home",
					icon: "home-o",
					label: "首页"
				},{
					name: "fenLei",
					icon: "cluster-o",
					label: "全部分类"
				},{
					name: "gouWuChe",
					icon: "shopping-cart-o",
					label: "购物车"
				},{
					name: "me",
					icon: "user-o",
					label: "我"
				}
			]
		};
	},
	watch: {
		active(toPage) {
			this.$router.push(toPage);
		}
	},
	methods: {
		pageChanged(active) {
			this.active = active;
		}
	}
};
</script>

<style></style>
