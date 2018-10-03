<template>
  <v-navigation-drawer
    v-model="drawer"
    fixed
    right
    app
    class="pa-3"
  >
  <v-list dense>
    <v-list-tile :to="{ path: '/write'}">
      <v-list-tile-action>
        <v-icon>create</v-icon>
      </v-list-tile-action>
      <v-list-tile-content>
        <v-list-tile-title>포스트작성</v-list-tile-title>
      </v-list-tile-content>
    </v-list-tile>
    <v-list-tile :to="{ path: '/'}">
      <v-list-tile-action>
        <v-icon>update</v-icon>
      </v-list-tile-action>
      <v-list-tile-content>
        <v-list-tile-title>카테고리관리</v-list-tile-title>
      </v-list-tile-content>
    </v-list-tile>
  </v-list>
  <hr class="my-4"/>
    <v-list dense>
      <v-list-tile @click="moveCategory(item._id)" v-for="item in getCategories">
        <v-list-tile-action>
          <v-icon>list</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>{{item.name}}</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </v-navigation-drawer>
</template>
<script>
import { mapState, mapGetters, mapActions } from 'vuex'
export default {
  data: () => ({

  }),
  computed: {
    ...mapState(['drawer']),
    ...mapGetters('category', ['getCategories'])
  },
  methods: {
    ...mapActions('category', ['refresh']),
    ...mapActions(['moveCategory']),
  },
  mounted() {
    this.refresh();
  }
}
</script>
