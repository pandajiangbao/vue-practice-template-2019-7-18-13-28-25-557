import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const store = new Vuex.Store({
    state: {
        countSum: 0
    },
    mutations: {
        clear(state) {
            state.countSum=0
        },
        increment(state) {
            state.countSum++
        },
        decrease(state) {
            state.countSum--
        }
    }
})
export default store