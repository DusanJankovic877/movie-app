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
        randomJoke: {},
        categories: {},
        category: ''
        
      },
      mutations: {
        setRandomJoke(state, payload){
          state.randomJoke = payload;
        },
        setCategories(state, payload){
          state.categoriers = payload;
        
        },

      },
      actions:{
        async fetchRandomJoke(state){
          const randomJoke = await chuckService.getRandomJoke();
          state.commit('setRandomJoke', randomJoke); //lokalni state
          // rootState.commit('chuckSetRandomJoke'); //prebacivanje u drugi modul
        },
        async fetchCategories (state){
          const categoriers = await chuckService.getRandomJoke();
          state.commit('setCategories', categoriers);
        },
        fetchCategory(state){
          this.category = chuckService.category
          console.log(this.category, state);
        }
        
      },
      getters:{
        randomJoke: (state) => state.randomJoke,
        categoriers: (state) => state.categoriers,
        category:(state) => state.category
      }
    }

  }
})
