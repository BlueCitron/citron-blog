<template>
  <v-toolbar color="yellow" light fixed app>
    <v-toolbar-title class="mr-5">BlueCitron's Blog</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-layout align-center justify-end row>
      <v-flex xs12 sm6 md4>
        <v-text-field
        label="Search.."
        append-icon="search"
        ></v-text-field>
      </v-flex>
      <v-flex xs 2 sm1 md1>
        <router-link to="/login">
          <v-icon light>vpn_key</v-icon>
        </router-link>
      </v-flex>
      <v-toolbar-side-icon @click.stop="changeDrawer"></v-toolbar-side-icon>
    </v-layout>
  </v-toolbar>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  data: () => ({

  }),
  computed: {

  },
  methods: {
    ...mapActions(['changeDrawer']),

  },
  created() {

  }
}
</script>
