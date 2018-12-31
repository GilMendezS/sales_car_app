import Vue from 'vue'
import Vuex from 'vuex'
import cars from './stores/cars';
import users from './stores/users';
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    cars,
    users
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
