import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({

  state: {
    // posar variables i col·leccions aquí
    starShips: [],
    infoTechShip: [],
    index: 0
  },
  getters: {
    // posa l'equivalent a les propietats computades aquí
  },
  mutations: {
    // funcions síncrones per canviar l'estat e.j. put, edit, delete
    setInoShip(state, getItem) {
      state.infoTechShip = getItem
    }
  },
  actions: {
    // funcions asíncrones que pot anomenar una o més mutacions
    async GET_STARSHIPS() {
      const response = await fetch(`https://swapi.dev/api/starships/`);
      this.state.starShips = await response.json();
      console.log(this.starShips)
    },

  },
  modules: {
  }
})
