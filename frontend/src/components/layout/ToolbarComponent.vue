<template>
  <v-toolbar color="yellow" light fixed app>
    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn flat to="/">BlueCitron's Blog</v-btn>
    </v-toolbar-items>
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
          <v-icon light v-if="!getSignedInState">vpn_key</v-icon>
        </router-link>
        <v-icon light v-if="getSignedInState" @click="signout">exit_to_app</v-icon>
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
    ...mapGetters('user', ['getSignedInState'])
  },
  methods: {
    ...mapActions(['changeDrawer']),
    ...mapActions('user', ['signout'])

  },
  created() {

  }
}
</script>
