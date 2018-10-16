<template>
<v-container>
  <v-layout justify-space-between class="px-3">
    <v-btn flat icon color="secondary" @click="moveBackPage();">
      <v-icon>keyboard_backspace</v-icon>
    </v-btn>
    <v-btn flat icon color="secondary" @click="deletePost(post._id); moveBackPage();">
      <v-icon>delete</v-icon>
    </v-btn>
</v-layout>
  <v-card class="mt-3 pa-5">
        <v-layout class="title-style" justify-start>
          <h1>{{ post.title }}</h1>
          <v-spacer></v-spacer>
          <h4>
            조회수 {{ post.viewCount }}
            작성일 {{ post.createdAt }}
            작성자 {{ post.createdBy.nickname }}
          </h4>
        </v-layout>
        <v-divider class="my-2"></v-divider>
        <v-layout class="mt-2 content-style" justify-start>
          <v-flex md12>
            <div id="viewer"></div>
          </v-flex>
        </v-layout>

        <v-subheader>댓글 {{0}}개</v-subheader>
        <v-divider></v-divider>
        <v-layout>
          <v-textarea label="댓글 달기" v-model="newComment"></v-textarea>
        </v-layout>
        <v-layout justify-end>
          <v-btn
          flat
          color="primary"
          @click="insertComment({ postId: post._id, content: newComment }); newComment='';"
          >댓글 등록</v-btn>
        </v-layout>

        <template v-for="item in getCommentsByPostId(this.post._id)">
          <v-layout justify-space-between>
              <v-subheader class="pl-5">
                <v-flex>
                  <v-avatar
                  slot="activator"
                  size="36px"
                  >
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTH_MYtiUPza5pZM8aEwdVPSNKo0jpFG6wp8BvRqq-yeCW1xATU">
                  </v-avatar>
                </v-flex>
                <v-flex>
                  작성자 {{ post.createdBy.nickname }}
                  작성일 {{ post.createdAt }}
                </v-flex>
              </v-subheader>
            <v-btn flat icon color="secondary" @click="deleteComment(item)">
              <v-icon>delete</v-icon>
            </v-btn>
          </v-layout>
          <v-layout>
            <v-textarea
            solo
            readonly
            :label="commentLabel(item)"
            class="pl-5"
            :value="item.content"
            ></v-textarea>
          </v-layout>

        </template>
  </v-card>
</v-container>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
import Editor from 'tui-editor'
import Viewer from 'tui-editor/dist/tui-editor-Viewer'
export default {
  data: () => ({
    post: null,
    comments: null,
    newComment: ''
  }),
  computed: {
    ...mapGetters('post', ['getPostById']),
    ...mapGetters('comment', ['getAllComments', 'getCommentsByPostId'])
  },
  methods: {
    ...mapActions('post', ['deletePost']),
    ...mapActions('comment', ['insertComment', 'deleteComment']),
    ...mapActions('util', ['view']),
    moveBackPage () {
      this.$router.go(-1)
    },
    commentLabel(comment) {
      return `작성자 ${this.post.createdBy} 작성일 ${comment.createdAt}`
    }
  },
  created() {
    this.post = this.getPostById(this.$route.params.post_id)
    this.comments = this.getCommentsByPostId(this.post._id)
    this.view(this.post)
  },
  mounted() {
    var editor = new Viewer({
      el: document.querySelector('#viewer'),
      initialValue: this.post.content
    })
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
