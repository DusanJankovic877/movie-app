<template>
  <div class="ChuckNorris">
    <h1>Chuck Norris</h1>
    <div> 
        <h3>Chuck Norris random joke</h3> 
        <span>{{randomJoke.value}}</span>
        <img :src="randomJoke.iconUrl" alt="">
    </div>
        {{categories}}
    <select name="categories" id="categories" v-model="selectedCategory">
        <option v-for="category in categories" :key="category.id">{{category}}</option>
    </select>
        <button @click="getCategory">new joke</button>

    
  </div>
</template>

<script>
// import { mapActions } from 'vuex'
import chuckService from '../services/ChuckService'
import store from '../store/index'
export default {
  name: 'ChuckNorris',
  data(){
      return {
          categories: [],
          selectedCategory: ''
      
      }
  },
  async created(){
    this.categories = await chuckService.getCategories();
    console.log(store.state.category);
  },

  computed: {
    randomJoke(){
      return this.$store.getters['ChuckStoreModule/randomJoke'];
    }
  },
  methods:{
    //   getNewJoke(){
    //       chuckService.getMovieByCategory(this.selectedCategory)
    //       console.log(this.selectedCategory);
    //   },
      getCategory(){
        //   console.log(this.selectedCategory);
          chuckService.getCategory(this.selectedCategory)
      },
  
  },

  beforeRouteEnter(to, from, next){
      store.dispatch('ChuckStoreModule/fetchRandomJoke').then(() => {
          next();
      });
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
