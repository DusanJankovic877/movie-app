import Vue from 'vue'
import Vuex from 'vuex'
import { movieService } from '../services/MovieService'
Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    movies: [ {id: 23, title: 'safsaf'}]
  },
  mutations: {
    setMovies(state, payload){
      state.movies = payload;
    }
  },
  actions: {
    async fetchMovies(state){
      const movies = await movieService.getAll();
    
      state.commit('setMovies', movies);
    }
    
 
  },
  getters:{
    movies: (state) => state.movies
  }
})
