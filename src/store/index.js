import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({

  state: {
    starShips: [],
    infoTechShip: [],
    page: 1,
    condition: false,
    numImg: 1,
    imageShips:null
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
    },
    getImageShips(state){
      return state.imageShips
    }
  },
  mutations: {
    setShips(state, setShipsAction) {
      state.starShips = setShipsAction
    },
    setImageShips(state,setImageShipsAction){
      state.imageShips =setImageShipsAction
    }
  },
  actions: {
    async GET_STARSHIPS({ commit }) {
      const response = await fetch(`https://swapi.dev/api/starships/?page=${this.state.page}`);
      const ships = await response.json();
      commit('setShips', ships)
    },
    async GET_IMAGESHIPS({ commit }) {
      const response = await fetch(`https://starwars-visualguide.com/assets/img/starships/${this.state.numImg}.jpg`);
      const imageShips = response;
      console.log(imageShips)
      commit('setImageShips', imageShips)

      // .then((response) => response.json())
      // .then((data) => {
      //   console.log('Success:', data);
      // })
      // .catch((error) => {
      //   console.error('Error:', error);
      // });
    },
  },
  modules: {
  }
})
