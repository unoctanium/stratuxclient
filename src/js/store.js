import Vue from 'vue'
import Vuex from 'vuex'

import stratux from './stratux.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    settings: null,
    connected: navigator.onLine,
    status: null,
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
      const payload = stratux.getStatus()
      commit('SET_STATUS', payload)
    },

    getSettings ({ commit }) {
      const payload = stratux.getSettings()
      commit('SET_SETTINGS', payload)
    },

    getTowers ({ commit }) {
      const payload = stratux.getTowers()
      commit('SET_TOWERS', payload)
    },

    getTraffic ({ commit }) {
      const payload = stratux.getTraffic()
      commit('SET_TRAFFIC', payload)
    },


  }
})