<template>
  <div class="hello">
    <h1>Movies</h1>
          <div>
        <button @click="setSortingCriteria('title')">Sort by title</button>
        <button @click="setSortingCriteria('duration')">Sort by duration</button>
      </div>
      <div>
        <button @click="setSortingDirection(-1)">ASC</button>
        <button @click="setSortingDirection(1)">DESC</button>
      </div>
<div v-if="filteredMovies.length">
  <table>
    <tr>
      <th>Title</th>
      <th>Director</th>
      <th>Release Date</th>
      <th>Genre</th>
      <th>Duration</th>
      <th>Image</th>
      <th></th>
    </tr>
    
      <movie-row 
        v-for="movie in sortAsc" :key="movie.id" 
        :movie="movie" 
        :isSelected="getIsMoviesSelected(movie)" 
        @movie-selected="handleMovieSelected"/>
    

  </table>

</div>
  <div v-else>
    <p style="color: white; background-color:red">there is no movies for current input</p>
  </div>
      <div>
      <button class="btn btn-primary" @click="selectAll">Select all</button>	&nbsp;
      <button class="btn btn-danger" @click="deselectAll">Deselect all</button>

      <p>number of selected movies {{countSelectedMovies}}</p>
      {{}}
    </div>
  </div>
</template>

<script>
import { store } from '../store/index';
import {mapGetters} from 'vuex';
import MovieRow from './MovieRow';

export default {
  name: 'AppMovies',
  data(){
    return {
      selectedMovies: [],
      sortinCriteria: 'title',
      sortDirection: -1
    }
  },
  
  components:{
    MovieRow
  },
  computed: {
    ...mapGetters(['movies', 'filteredMovies']),
    countSelectedMovies(){
      return this.selectedMovies.length;
    },
        sortAsc(){
   
        return this.filteredMovies.map((m) => m).sort((movieA, movieB) => movieA[this.sortinCriteria] < movieB[this.sortinCriteria]
                ? this.sortDirection
            : -1 * this.sortDirection)

    },
    // sortedFilteredMovies() {
    //   return this.filteredMovies
    //     .map((m) => m)
    //     .sort((movieA, movieB) =>
    //       movieA[this.sortingCriteria] < movieB[this.sortingCriteria]
    //         ? this.sortDirection
    //         : -1 * this.sortDirection
    //     );   } 
  },
  methods: {
    handleMovieSelected(movie){
      if(this.getIsMoviesSelected(movie)){
        return;
      }
      this.selectedMovies.push(movie);
    },
    getIsMoviesSelected(movie){
      return !!this.selectedMovies.find((m) => m.id == movie.id);
      // console.log(this.selectedMovies.length);
    },
    selectAll(){
        this.selectedMovies = [...this.filteredMovies]
    },
    deselectAll(){
      this.selectedMovies = []
    },

        setSortingCriteria(field) {
      this.sortinCriteria = field;
    },
       setSortingDirection(direction) {
      this.sortDirection = direction;
    },
  
  },
    beforeRouteEnter(to, from, next){
        //4ti vuex korak
        // console.log('dispatch action')
        store.dispatch('fetchMovies').then(()=> {
            next();
        })
        
    }


}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
