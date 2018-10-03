<template>
<v-container>
  <v-layout>뒤로가기</v-layout>
  <v-card class="mt-3 pa-5"
        height="600" >
        <v-layout class="title-style" justify-start>
          <h1>{{ post.title }}</h1>
          <v-spacer></v-spacer>
          <h4>
            조회수 {{ post.viewCount }}
            작성일 {{ post.createdAt }}
            작성자 {{ post.createdBy.nickname }}
          </h4>
        </v-layout>
        <hr style="border-width: 0.7px"/>
        <v-layout class="mt-2 content-style" justify-start>
          <v-flex md12>
            <div id="viewer"></div>
          </v-flex>
        </v-layout>
  </v-card>
</v-container>
</template>
<script>
import { mapGetters } from 'vuex'
import Editor from 'tui-editor'
import Viewer from 'tui-editor/dist/tui-editor-Viewer'
export default {
  data: () => ({
    post: null
  }),
  computed: {
    ...mapGetters('post', ['getPostById'])
  },
  created() {
    this.post = this.getPostById(this.$route.params.post_id)
  },
  mounted() {
    var editor = new Viewer({
        el: document.querySelector('#viewer'),
        height: '300px',
        initialValue: this.post.content
      });
  }
}
</script>
<style scoped>
.title-style{
  -webkit-font-smoothing: antialiased;
  color: #666;
}
.content-style{
  -webkit-font-smoothing: antialiased;
  color: #666;
}
#viewer{
  text-align:left !important;
}
</style>
