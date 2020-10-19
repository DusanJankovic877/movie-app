<template>
    <div>
        <input size="sm" class="col-sm-4" placeholder="Search" @input="handleSearch" />  
    </div>
</template>
<script>

import {mapMutations} from 'vuex'
export default {
  data() {
    return {
      searchTerm: '',
    }
  },
  methods: {
    ...mapMutations(['setSearchText']),
    handleSearch(event){
      // console.log(event.target.value);
      this.setSearchText(event.target.value)

    }
  }
}
</script>