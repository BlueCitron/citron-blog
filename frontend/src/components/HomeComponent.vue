<template>
<div>
  <v-app id="inspire">
    <navigation-component :userInfo="getUserInfo"></navigation-component>
    <toolbar-component></toolbar-component>
    <content-component></content-component>
  </v-app>
</div>
</template>
<script>
import NavigationComponent from './layout/NavigationComponent'
import ToolbarComponent from './layout/ToolbarComponent'
import ContentComponent from './layout/ContentComponent'
import { mapGetters } from 'vuex'
export default {
    components: { NavigationComponent, ToolbarComponent, ContentComponent },
    data: () => ({
      test: null
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
