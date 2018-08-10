/*
* @Author: Jacky
* @Date:   2018-08-10 08:53:00
* @Last Modified by:   Jacky
* @Last Modified time: 2018-08-10 15:42:24
*/
import Vue from 'vue'
import Vuex from 'vuex'
import state from './sate.js'
import mutations from './mutations.js'
Vue.use(Vuex)

export default new Vuex.Store({
	state,
	mutations
	// getters: {
	// 	//会接收一个参数state
	// 	doubleCity (state) {
	// 		return state.city + ' '+state.city
	// 	}
	// }
})