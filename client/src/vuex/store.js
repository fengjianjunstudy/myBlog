import Vue from 'vue';
import Vuex from 'vuex'

Vue.use(Vuex);

const state = {
  count:6
}

const mutations={
    add(state){
        state.count++;
    },
    reduce(state){
        state.count--;
    }
}
const getters = {
	count(state){
		return state.count += 100
	}
}
export default new Vuex.Store({
	state,
	mutations,
	getters 
})
