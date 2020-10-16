<template>
    <div>
        <b-form-input size="sm" class="col-sm-4" placeholder="Search" v-model="searchTerm"></b-form-input>
        <table v-if="!searchTerm == ''"> 
            <tr>
                <th>Title</th>
                <th>Director</th>
                <th>Release Date</th>
                <th>Genre</th>
                <th>Duration</th>
                <th>Image</th>
            </tr> 
            <tr  v-for="(movie, index) in filterList" :key="index" >
                <td>{{movie.title}}</td>
                <td>{{movie.director}}</td>
                <td>{{movie.releaseDate}}</td>
                <td>{{movie.genre}}</td>
                <td>{{movie.duration}}</td>
                <td><img :src=movie.imageUrl alt="" width="200"></td>
            </tr>\
        </table>
    </div>
</template>
<script>
import {mapGetters} from 'vuex'
export default {
  data() {
    return {
      searchTerm: '',
    }
  },
  computed: {
    ...mapGetters(['movies']),
      filterList(){
     return this.movies.filter((movie) =>
        movie.title.toLowerCase().startsWith(this.searchTerm.toLowerCase())
      );
    }

  },
  methods: {
    getFilteredList() {
       return this.movies.filter((movie) =>
        movie.title.toLowerCase().startsWith(this.searchTerm.toLowerCase())
      );
  }

  }
}
</script>