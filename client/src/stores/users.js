import axios from 'axios';
import router from "../router";
export default {
    namespaced: true,
    state: {
        token: null,
        authenticatedUser: null
    },
    mutations: {
        setUser: (state, payload) => {
            state.authenticatedUser = payload;
            localStorage.setItem('user', JSON.stringify(payload));
        },
        setToken: (state, payload) => {
            state.token = payload;
            localStorage.setItem('token', payload);
        },
        logoutUser: state => {
            state.authenticatedUser = null;
            state.token = null;
            localStorage.clear();
        }
    },
    actions: {
        signup: ({commit, rootGetters}, payload) => {
            axios.post(`${rootGetters.url}/users/signup`, payload)
            .then(response => {
                console.log(response)
                if(response.status === 200){
                    router.push('/signin')
                }
                else {

                }
            })
            .catch(err => {
                console.log(err)
            })
        },
        signin: ({commit, rootGetters}, payload) => {
            axios.post(`${rootGetters.url}/users/signin`, payload)
            .then(response => {
                console.log(response.data)
                if(response.status === 200){
                    commit('setUser', response.data.user);
                    commit('setToken', response.data.token)
                }
                else {

                }
            })
            .catch(err => {
                console.log(err)
            })
        }
    },
    getters: {

    }
}