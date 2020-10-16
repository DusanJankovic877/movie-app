<template>
<div>
  <b-navbar toggleable="lg" type="dark" variant="info">

    <router-link class="navbar-brand" to="/movies">Movies</router-link>
    
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item href="#">Link</b-nav-item>
        <b-nav-item href="#" disabled>Disabled</b-nav-item>
      </b-navbar-nav>


    </b-collapse>
  </b-navbar>


  </div>
</template>
<script>
// import { store } from '../store/index'


</script>