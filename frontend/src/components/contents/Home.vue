<template>
<v-container>
  <v-subheader>최근에 올라온 글</v-subheader>
  <v-divider class="my-1"/>
  <v-layout wrap>
    <v-flex md4 class="pa-3" v-for="item in list">
      <v-card
      class="pointer"
      raised >
        <v-img src="https://cdn.vuetifyjs.com/images/cards/desert.jpg" aspect-ratio="2.75"></v-img>
        <v-card-title primary-title>
          <div class="text-md-left">
            <h3 class="headline mb-0">제목</h3>
            <div>컨텐츠 ㅎㅎ컨텐츠 ㅎㅎ컨텐츠 ㅎㅎ컨텐츠 ㅎㅎ컨텐츠 ㅎㅎ컨텐츠 ㅎㅎ컨텐츠 ㅎㅎ컨텐츠 ㅎㅎ</div>
          </div>
        </v-card-title>
        <v-card-actions>
          <v-btn flat color="orange">조회수  5957</v-btn>
          <v-btn flat color="orange">댓글  0</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>

  </v-layout>
  <v-layout row justify-center>
    <v-pagination v-model="list" :length="list.length"></v-pagination>
  </v-layout>

</v-container>
</template>
<script>
export default {
  data: () => ({
    list: [1, 2, 3, 4, 5, 6, 7, 8]
  })
}
</script>
