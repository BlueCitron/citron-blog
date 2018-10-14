<template>
  <v-toolbar color="yellow" light fixed app>
    <v-layout justify-space-between align-center>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn flat to="/">BlueCitron's Blog</v-btn>
      </v-toolbar-items>
      <h2>{{ setCategoryName() }}</h2>
      <v-flex md2 d-flex justify-start align-center>
        <v-text-field
        label="Search.."
        append-icon="search"
        class="mr-3"
        ></v-text-field>
        <router-link to="/login">
          <v-icon light v-if="!getSignedInState">vpn_key</v-icon>
        </router-link>
        <v-icon light v-if="getSignedInState" @click="signout">exit_to_app</v-icon>
        <v-toolbar-side-icon @click.stop="changeDrawer" class="ml-3"></v-toolbar-side-icon>
      </v-flex>
    </v-layout>
  </v-toolbar>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  data: () => ({

  }),
  computed: {
    ...mapGetters('user', ['getSignedInState']),
    ...mapGetters('category', ['getCategoryNameById']),
    ...mapGetters('post', ['getPostsWithPaging', 'getPostById'])
  },
  methods: {
    ...mapActions(['changeDrawer']),
    ...mapActions('user', ['signout']),
    setCategoryName () {
      if(this.$route.params.category_id)
        return `${this.getCategoryNameById(this.$route.params.category_id)} (${this.getPostsWithPaging.length})`
      if (this.$route.path.indexOf('/post') != -1) {
        const post_id = this.$route.path.split('/')[2]
        const { category } = this.getPostById(post_id)
        return `${category.name} (${this.getPostsWithPaging.length})`
      }
    }

  },
  created() {

  }
}
</script>
