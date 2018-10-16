<template>
<div>
  <v-app id="inspire" class="mb-5">
    <navigation-component></navigation-component>
    <toolbar-component></toolbar-component>
    <content-component></content-component>
    <footer-component></footer-component>
  </v-app>
</div>
</template>
<script>
import NavigationComponent from './layout/NavigationComponent'
import ToolbarComponent from './layout/ToolbarComponent'
import ContentComponent from './layout/ContentComponent'
import FooterComponent from './layout/FooterComponent'
import { mapGetters } from 'vuex'
export default {
    components: { NavigationComponent, ToolbarComponent, ContentComponent, FooterComponent },
    data: () => ({
    }),
    computed: {
      ...mapGetters(['getDrawer']),
      ...mapGetters('user', ['getUserInfo']),
      ...mapGetters('comment', ['getComments', 'getCommentsByPostId'])
    },
  }
</script>
<style>
.cursor-pointer{ cursor:pointer; }
.cursor-none{ cursor:none; }
</style>
