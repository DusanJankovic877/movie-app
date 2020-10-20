<template>
  <div class="ChuckNorris">
    <h1>Chuck Norris</h1>
    <div> 
        <h3>Chuck Norris random joke</h3> 
        <span>{{randomJoke.value}}</span>
        <img :src="randomJoke.iconUrl" alt="">
    </div>
  

    
  </div>
</template>

<script>
// import chuckService from '../services/ChuckService'
import store from '../store/index'
export default {
  name: 'ChuckNorris',

  computed: {
    randomJoke(){
      return this.$store.getters['ChuckStoreModule/randomJoke'];
    }
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
