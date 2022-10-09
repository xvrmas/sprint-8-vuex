import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({

  state: {
    starShips: [],
    infoTechShip: [],
  },
  getters: {
    getStarShips(state) {
      return state.starShips
    },
    getInfoShips(state) {
      return state.infoTechShip
    }
  },
  mutations: { 
    setShips(state, setShipsAction) {
      state.starShips = setShipsAction
    }
  },
  actions: {
    async GET_STARSHIPS({ commit }) {
      const response = await fetch(`https://swapi.dev/api/starships/`);
      const ships = await response.json();
      commit('setShips', ships)
    },
  },
  modules: {
  }
})
