<template>
<v-container class="px-5">
  <v-card class="pa-3 mt-3">
    <v-layout row>
      <v-flex md2 class="mr-2">
        <v-combobox
        v-model="selectedCategory"
        :items="getCategoryNames"
        ></v-combobox>
      </v-flex>
      <v-flex>
        <v-text-field v-model="newPost.title"></v-text-field>
      </v-flex>
    </v-layout>

    <div id="editor"></div>
    <v-layout justify-end>
      <v-btn color="warning" @click="validation(newPost)">작성</v-btn>
      <v-btn color="secondary">취소</v-btn>
    </v-layout>
  </v-card>
</v-container>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
import Editor from 'tui-editor'
export default {
  data: () => ({
    newPost: {
      category: '',
      title: '',
      content: ''
    },
    selectedCategory: '',
    editor: null
  }),
  computed: {
    ...mapGetters('category', ['getCategories', 'getCategoryNames', 'getCategoryIdByName']),
    ...mapGetters('user', ['getUserInfo'])
  },
  methods: {
    ...mapActions('post', ['write']),
    validation(post) {
      post.category = this.selectedCategory
      if(!post.title)
        alert('제목을 입력해주세요.')
      else if(!this.getCategoryIdByName(post.category))
        alert('올바른 카테고리를 선택해주세요.')
      else{
        post.category = this.getCategoryIdByName(post.category)
        post.content = this.editor.getHtml()
        this.write(post)
      }
    }
  },
  mounted() {
    this.editor = new Editor({
    el: document.querySelector('#editor'),
    initialEditType: 'wysiwyg',
    previewStyle: 'vertical',
    height: '600px'
  });
    // 카테고리 초기화
    this.selectedCategory = this.getCategoryNames[0]
  }
}
</script>
<style scoped>
#editor{
  text-align:left !important;
}
</style>
