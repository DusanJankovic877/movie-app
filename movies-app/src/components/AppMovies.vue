<template>
  <div class="hello">
    <h1>Movies</h1>
<div v-if="filteredMovies.length">
  <table>
    <tr>
      <th>Title</th>
      <th>Director</th>
      <th>Release Date</th>
      <th>Genre</th>
      <th>Duration</th>
      <th>Image</th>
    </tr>
    
      <movie-row v-for="movie in filteredMovies" :key="movie.id" :movie="movie"/>
    

  </table>
</div>
  <div v-else>
    <p style="color: white; background-color:red">there is no movies for current input</p>
  </div>

  </div>
</template>

<script>
import { store } from '../store/index'
import {mapGetters} from 'vuex'
import MovieRow from './MovieRow'

export default {
  name: 'AppMovies',
  
  components:{
    MovieRow
  },
  computed: {
    ...mapGetters(['movies', 'filteredMovies'])
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
