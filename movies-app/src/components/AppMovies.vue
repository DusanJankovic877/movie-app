<template>
  <div class="hello">
    <h1>Movies</h1>

  <table>
    <tr>
      <th>Title</th>
      <th>Director</th>
      <th>Release Date</th>
      <th>Genre</th>
      <th>Duration</th>
      <th>Image</th>
    </tr>
      <movie-row v-for="movie in movies" :key="movie.id" :movie="movie"/>
  </table>
<div class="row">
  <!-- <movie-card v-for="movie in movies" :key="movie.id" :movie="movie"/> -->
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
    ...mapGetters(['movies'])
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
