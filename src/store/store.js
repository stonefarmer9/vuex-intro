import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  strict: true,
  state: {
    primarch: '',
    legion: ''
  },
  mutations: {
    changePrimarch(state, primarch) {
      state.primarch = primarch
    },
    changeLegion(state, legion) {
      state.legion = legion
    }
  },
  getters: {
    primarch: state => state.primarch,
    legion: state => state.legion
  }
})
