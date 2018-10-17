<template>
<v-navigation-drawer :value="drawer" fixed right app class="pa-3">
  <template name="signedInView" v-if="getSignedInState">
  <v-list two-line>
    <v-list-tile avatar>
      <v-list-tile-avatar>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTH_MYtiUPza5pZM8aEwdVPSNKo0jpFG6wp8BvRqq-yeCW1xATU">
      </v-list-tile-avatar>

      <v-list-tile-content v-if="getUserInfo != undefined">
        <v-list-tile-title>{{ getUserInfo.nickname }}님 반갑습니다</v-list-tile-title>
        <v-list-tile-sub-title>최근접속 : {{ getUserInfo.lastLogin.slice(0, 10) }}</v-list-tile-sub-title>
      </v-list-tile-content>
    </v-list-tile>

  </v-list>
  <hr class="my-4" />
  <v-list dense>
    <v-list-tile :to="{ path: '/write'}">
      <v-list-tile-action>
        <v-icon>create</v-icon>
      </v-list-tile-action>
      <v-list-tile-content>
        <v-list-tile-title>포스트작성</v-list-tile-title>
      </v-list-tile-content>
    </v-list-tile>
    <v-list-tile :to="{ path: '/category'}">
      <v-list-tile-action>
        <v-icon>update</v-icon>
      </v-list-tile-action>
      <v-list-tile-content>
        <v-list-tile-title>카테고리관리</v-list-tile-title>
      </v-list-tile-content>
    </v-list-tile>
  </v-list>
  </template>
  <hr class="my-4" />
  <v-list dense>
    <v-list-tile
    @click="moveCategory(item._id)"
    v-for="item in getCategories"
    v-if="item.name != '공지사항'">
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
import moment from 'moment'
import { mapState, mapGetters, mapActions } from 'vuex'
export default {
  data: () => ({
  }),
  computed: {
    ...mapState(['drawer']),
    ...mapGetters('category', ['getCategories']),
    ...mapGetters('user', ['getSignedInState', 'getUserInfo'])
  },
  methods: {
    ...mapActions('category', ['refresh']),
    ...mapActions(['moveCategory']),
  },
  mounted () {
    this.refresh();
  },
}
</script>
