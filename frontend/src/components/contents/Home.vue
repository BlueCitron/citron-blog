<template>
<v-container>
  <v-subheader>최근에 올라온 글</v-subheader>
  <v-divider class="my-1"/>
  <v-layout wrap>
    <v-flex md4 class="pa-3" v-for="item in getLatestPosts" v-if="getLatestPosts.length != 0">
      <v-card
      class="pointer"
      :to="{ name: 'PostView', params: { post_id: item._id }}"
      raised >
        <v-img :src="item.previewImage" aspect-ratio="2"></v-img>
        <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0 text-md-left">{{ item.title.slice(0, 40) + '...' }}</h3>
            <div class="text-md-left">{{ item.content.replace(/(<([^>]+)>)|nbsp;/gi, "").replace(/(&)/g," ").slice(0, 105) + '...'}}</div>
          </div>
        </v-card-title>
        <v-card-actions>
          <v-btn flat color="orange">조회수  {{ item.viewCount }}</v-btn>
          <v-btn flat color="orange">댓글  0</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
  <v-layout row justify-center>
    <!-- <v-pagination v-model="list" :length="list.length"></v-pagination> -->
  </v-layout>
</v-container>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  computed: {
    ...mapGetters('post', ['getLatestPosts', 'getNotices'])
  },
  methods: {
    ...mapActions('post', ['latestPosts', 'refresh'])
  },
  created () {
    this.latestPosts()
  }
}
</script>
