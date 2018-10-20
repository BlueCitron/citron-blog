<template>
  <v-flex>
    <v-divider class="my-3"/>
    <v-layout>
      <v-flex class="px-3">
        <v-subheader>공지사항</v-subheader>
        <v-divider class="my-1"/>
        <v-layout column justify-start align-start>
          <div
          class="grey--text cursor-pointer"
          v-for="item in getNotices"
          @click=""
          >{{ item.title }}</div>
        </v-layout>
      </v-flex>
      <!-- <v-flex class="px-3" v-if="false">
        <v-subheader>최근에 작성된 글</v-subheader>
        <v-divider class="my-1"/>
        <v-layout column justify-start align-start>
          <div class="grey--text">하하하하하</div>
          <div class="grey--text">하하하하하</div>
          <div class="grey--text">하하하하하</div>
          <div class="grey--text">하하하하하</div>
        </v-layout>
      </v-flex> -->
      <v-flex class="px-3">
        <v-subheader>최근에 달릿 댓글</v-subheader>
        <v-divider class="my-1"/>
        <v-layout column justify-start align-start>
          <div
          class="grey--text cursor-pointer"
          v-for="item in getLatestComments">
          {{
            item.content.length > 30 ? item.content.slice(0, 30) + '...' : item.content
          }}
        </div>
        </v-layout>
      </v-flex>
      <v-flex class="px-5 mt-3">
        <v-layout column align-center class="px-5">
          <!-- <v-flex d-flex class="my-1"><h2>Total</h2></v-flex>
          <v-flex d-flex><h2>595,591</h2></v-flex>
          <v-flex d-flex justify-space-between class="my-1 px-5">
            <div class="text-md-left subheading font-weight-bold grey--text pl-5">Today</div>
            <div class="text-md-right subheading font-weight-bold grey--text pr-5">473</div>
          </v-flex>
          <v-flex d-flex justify-space-between class="my-1 px-5">
            <div class="text-md-left subheading font-weight-bold grey--text pl-5">Yesterday</div>
            <div class="text-md-right subheading font-weight-bold grey--text pr-5">397</div>
          </v-flex> -->
          <h2>방문자 통계 예정</h2>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-flex>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  data: () => ({

  }),
  computed: {
    ...mapGetters('post', ['getNotices']),
    ...mapGetters('comment', ['getLatestComments']),
  },
  methods: {
    ...mapActions('post', ['refresh'])
  },
}
</script>
