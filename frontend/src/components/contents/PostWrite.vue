<template>
<v-container class="px-5">
  <v-card class="pa-4 mt-3">
    <v-layout>
      <v-flex md10>
        <v-layout column>
          <v-flex>
            <v-layout>
              <v-flex md2 class="px-3">
                <v-combobox
                v-model="selectedCategory"
                :items="getCategoryNames"
                ></v-combobox>
              </v-flex>
              <v-flex md10 class="px-3">
                <v-text-field v-model="newPost.title"></v-text-field>
              </v-flex>
            </v-layout>
          </v-flex>
          <v-flex>
            <v-layout>
              <v-flex md2><v-btn flat color="success" @click="pickFile">첨부</v-btn></v-flex>
              <v-flex md10>
                <v-text-field
                :value="imageName"
                prepend-icon="attach_file"
                readonly
                ></v-text-field>
                <input type="file" style="display:none" ref="image" accept="image/*" @change="onFilePicked" />
              </v-flex>
            </v-layout>
          </v-flex>
        </v-layout>
      </v-flex>
      <v-flex md2>
        <img :src="newPost.previewImage" height="130" v-if="newPost.previewImage"/>
        <h4 v-if="!newPost.previewImage">이미지 미리보기</h4>
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
      content: '',
      previewImage: ''
    },
    selectedCategory: '',
    editor: null,
    imageName: ''
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
    },
    pickFile () {
      this.$refs.image.click()
    },
    onFilePicked (e) {
      const files = e.target.files
      if (files[0] !== undefined) {
        this.imageName = files[0].name
        if (this.imageName.lastIndexOf('.') <= 0) {
          return
        }
        const fr = new FileReader()
        fr.readAsDataURL(files[0])
        fr.addEventListener('load', () => {
          this.newPost.previewImage = fr.result
        })
      } else {
        this.imageName = ''
        this.newPost.previewImage = ''
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
