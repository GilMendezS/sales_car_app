import Vue from 'vue'
import Vuex from 'vuex'
import cars from './stores/cars';
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    cars
  },
  state: {
    url: `http://localhost:3000/api`
  },
  mutations: {

  },
  actions: {

  },
  getters: {
    url: state => {
      return state.url;
    }
  }
})
