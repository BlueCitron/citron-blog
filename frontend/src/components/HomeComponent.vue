<template>
<div>
  <v-app id="inspire">
    <navigation-component></navigation-component>
    <toolbar-component></toolbar-component>
    <content-component></content-component>
  </v-app>
</div>
</template>
<script>
import NavigationComponent from './layout/NavigationComponent'
import ToolbarComponent from './layout/ToolbarComponent'
import ContentComponent from './layout/ContentComponent'

export default {
    components: { NavigationComponent, ToolbarComponent, ContentComponent },
    props: {
      source: String
    }
  }
</script>
