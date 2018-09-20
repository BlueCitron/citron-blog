<template>
  <div class="container">
    <blog-nav></blog-nav>

    <div class="columns">
      <div class="column">
        광고판
      </div>
      <div class="column is-two-thirds">
        
        <blog-list></blog-list>
      </div>
      <div class="column">
        <blog-category></blog-category>
      </div>

    </div>

  </div>
</template>

<script>
import BlogCategory from './Blog/BlogCategory'
import BlogList from './Blog/BlogList'
import BlogNav from './Blog/BlogNav'
import BlogRead from './Blog/BlogRead'
import BlogWrite from './Blog/BlogWrite'
export default {
  components: {BlogCategory, BlogList, BlogNav, BlogRead, BlogWrite},
  data () {
    return {
      // Load From Server
      posts: [],
      categories: [],
      // Application Data
      searchText: '',
      searchFilter: '',
      curruentCategory: '',

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
