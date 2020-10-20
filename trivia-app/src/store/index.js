import Vue from 'vue'
import Vuex from 'vuex'
import chuckService from '../services/ChuckService'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
 
  },
  mutations: {

  },
  actions: {

  },
  modules: {
    TriviaStoreModule:{

    },
    ChuckStoreModule: {
      namespaced: true,
      state: {
        randomJoke: {}
      },
      mutations: {
        setRandomJoke(state, payload){
          state.randomJoke = payload;
        }
      },
      actions:{
        async fetchRandomJoke(state){
          const randomJoke = await chuckService.getRandomJoke();
          state.commit('setRandomJoke', randomJoke); //lokalni state
          // rootState.commit('chuckSetRandomJoke'); //prebacivanje u drugi modul
      
        }
      },
      getters:{
        randomJoke: (state) => state.randomJoke
      }
    }

  }
})
