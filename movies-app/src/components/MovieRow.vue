<template>
    <tr :class="{'selected' : isSelected}">
          <td>{{movie.title}}</td>
          <td>{{movie.director}}</td>
          <td>{{movie.releaseDate}}</td>
          <td>{{movie.genre}}</td>
          <td>{{movie.duration}}</td>
          <td><img :src=movie.imageUrl alt="no image" width="150"></td>
          <td><button @click="selectRow">Select</button></td>
    </tr>
</template>
<script>
export default {
    name: 'MovieRow',
    props:{
        movie: Object,
        isSelected: Boolean,
    },
    methods: {
        selectRow(){
            this.$emit('movie-selected', this.movie);

        }
    }
}
</script>
<style scoped>
.selected {
    background-color: red;
}
</style>