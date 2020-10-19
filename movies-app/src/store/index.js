import Vue from 'vue'
import Vuex from 'vuex'
import { movieService } from '../services/MovieService'
Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    movies: [],
    searchTerm: '',
    filteredMovies: []
  },
  mutations: {
    setMovies(state, payload){
      state.movies = payload;
    },
    setSearchText(state, payload){
      
      state.searchTerm = payload;
      
    }

  },
  actions: {
    async fetchMovies(state){
      const movies = await movieService.getAll();
    
      state.commit('setMovies', movies);
    },
    

    
    
    
 
  },
  getters:{
    movies: (state) => state.movies,
    filteredMovies: (state) => state.movies.filter((movie) => movie.title.toLowerCase().includes(state.searchTerm.toLowerCase())),
  

  }
})
