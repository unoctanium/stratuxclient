import Vue from 'vue'
import Vuex from 'vuex'

//import stratux from './stratux.js'

import stratux from './store-stratux'

Vue.use(Vuex)

export default new Vuex.Store({

  modules: {
    stratux
  },

  state: {
    settings: null,
    connected: navigator.onLine,
    status: "hi",
    towers: null,
    traffic: null,


  },

  getters: {
    connected: state => state.connected,
    settings: state => state.settings,
    status: state => state.status,
    towers: state => state.towers,
    traffic: state => state.traffic,
  },

  mutations: {
    'SET_CONNECTED' (state, payload) {
      state.connected = payload
    },
    'SET_STATUS' (state, payload)  {
      state.status = payload
    },
    'SET_SETTINGS' (state, payload)  {
      state.settings = payload
    },
    'SET_TOWERS' (state, payload)  {
      state.towers = payload
    },
    'SET_TRAFFIC' (state, payload)  {
      state.traffic = payload
    },


  },

  actions: {
    setConnected ({ commit }, payload) {
      commit('SET_CONNECTED', payload)
    },

    getStatus ({ commit }) {
      const payload = "non" //stratux.getStatus()
      commit('SET_STATUS', payload)
    },

    getSettings ({ commit }) {
      const payload = "non" //stratux.getSettings()
      commit('SET_SETTINGS', payload)
    },

    getTowers ({ commit }) {
      const payload = "non" //stratux.getTowers()
      commit('SET_TOWERS', payload)
    },

    getTraffic ({ commit }) {
      const payload = "non" //stratux.getTraffic()
      commit('SET_TRAFFIC', payload)
    },


  }
})