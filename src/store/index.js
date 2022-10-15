import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({

  state: {
    starShips: [],
    infoTechShip: [],
    page: 1,
    condition: false,
    numImg: 1
  },
  getters: {
    getStarShips(state) {
      return state.starShips
    },
    getInfoShips(state) {
      return state.infoTechShip
    },
    getPage(state) {
      return state.page
    },
    getCondition(state) {
      return state.condition
    },
    getNumImg(state) {
      return state.numImg
    }
  },
  mutations: {
    setShips(state, setShipsAction) {
      state.starShips = setShipsAction
    },
  },
  actions: {
    async GET_STARSHIPS({ commit }) {
      const response = await fetch(`https://swapi.dev/api/starships/?page=${this.state.page}`);
      const ships = await response.json();
      commit('setShips', ships)
    },
  },
  modules: {
  }
})
