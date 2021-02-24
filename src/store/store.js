import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

const store = new Vuex.Store({

	state: {
		historyPageList: [],
		cashViews: ["ZhuYe", "ShangPin"],
		pageScrollTop: {
			zhuYe: 0,
			shangPin: 0
		},
	},

	mutations: {
		intoStackPagePath(state, path) {
			state.historyPageList.push(path);
		},
		outStackPagePath(state, path) {
			state.historyPageList.pop();
		},
		clearHistoryPageList(state) {
			state.historyPageList = [];
		},
		intoCashView(state, path) {
			state.cashViews.push(path);
		},
		outCashView(state, path) {
			state.cashViews.pop();
		},
		clearCashView(state) {
			state.cashViews = [];
		},
		recordScroll(state, jsonData) {
			console.log(state.pageScrollTop[jsonData.pageName]);
			state.pageScrollTop[jsonData.pageName] = jsonData.scrollTop;
		},
	},

	getters: {}

})

export default store;
