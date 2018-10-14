<template>
<v-container>
  <template name="contentExist" v-if="getPostsWithPaging.length != 0">
  <!-- <v-layout justify-end>
    <h2 class="pr-3 pb-3">{{getCategoryNameById(this.$route.params.category_id)}}</h2>
  </v-layout> -->
  <hr/>
  <v-layout row wrap>
    <v-flex md4 class="pa-3" v-for="item in getPostsWithPaging">
      <v-card class="pointer" :to="{ name: 'PostView', params: { post: item }}"
          raised >
        <v-img src="https://cdn.vuetifyjs.com/images/cards/desert.jpg" aspect-ratio="2.75"></v-img>
        <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0">{{item.title.slice(0, 30)}}</h3>
            <div>{{item.content.replace(/(<([^>]+)>)/gi, "").slice(0, 40)}}</div>
          </div>
        </v-card-title>
        <v-card-actions>
          <v-btn flat color="orange">조회수 : {{item.viewCount}}</v-btn>
          <v-btn flat color="orange">댓글 : 0</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
  <v-layout row justify-center>
    <v-pagination v-model="getPageInfo.currentPage" :length="totalPage"></v-pagination>
  </v-layout>
  </template>
  <template name="NoneContent" v-if="getPostsWithPaging.length == 0">
    <v-layout justify-center class="mt-5">
      <img src="../../assets/citron_vert.png" />
    </v-layout>
    <h3 class="display-2 mt-5">This category has no contents.</h3>
  </template>
</v-container>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  computed: {
    ...mapGetters('post', ['getPostsWithPaging', 'getTotalCount', 'getPageInfo', 'getPostById']),
    ...mapGetters('category', ['getCategoryNameById']),
    totalPage () {
      return Math.ceil(this.getTotalCount / this.getPageInfo.perPage)
    },
  },
  methods: {
    ...mapActions('post', ['refresh']),
  },
  mounted() {
    const {
      category_id
    } = this.$route.params
    this.refresh(category_id)
  }
}
</script>
<style scoped>
.pointer {
  cursor: pointer
}
.border-red {border:1px solid red;}
.border-green {border:1px solid green;}
</style>
