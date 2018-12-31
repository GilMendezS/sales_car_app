import axios from 'axios';
export default {
    namespaced: true,
    state: {
        cars: []
    },
    mutations : {
        setLoadedCars(state, payload){
            state.cars = payload;
        }
    },
    actions: {
        loadCars({dispatch, commit, rootGetters}){
            axios.get(`${rootGetters.url}/cars`)
            .then(response => {
                console.log(response)
                commit('setLoadedCars', response.data.data);
            })
            .catch(err => {
                console.log(err)
            })
        }
    },
    getters: {
        getCars: state => {
            return state.cars;
        }
    }
}