<template>
    <tr>
          <td>{{movie.title}}</td>
          <td>{{movie.director}}</td>
          <td>{{movie.releaseDate}}</td>
          <td>{{movie.genre}}</td>
          <td>{{movie.duration}}</td>
          <td><img :src=movie.imageUrl alt="" width="200"></td>
    </tr>
</template>
<script>
export default {
    name: 'MovieRow',
    props:{
        movie: Object
    }
}
</script>