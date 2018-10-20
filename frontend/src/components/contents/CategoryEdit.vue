<template>
<v-container>
  <v-layout justify-center>
    <v-flex md5>
      <v-list two-line class="px-2">
        <template v-for="(item, index) in getCategories" v-if="item.name != '공지사항'">
          <v-divider v-if="index != 0"></v-divider>
          <v-list-tile>
            {{ item.name }}
            <v-spacer></v-spacer>
            <v-dialog v-model="dialog" width="500" class="mr-5">
              <v-btn slot="activator" color="primary" flat icon>
                <v-icon>edit</v-icon>
              </v-btn>
              <v-card>
                <v-card-title class="headline grey lighten-2" primary-title>
                  카테고리 수정
                </v-card-title>
                <v-layout row class="px-3">
                  <v-flex xs12>
                    <v-text-field
                    label="카테고리이름"
                    v-model="item.name"
                    ></v-text-field>
                  </v-flex>
                </v-layout>
                <v-divider></v-divider>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn
                  color="success"
                  flat
                  @click="dialog = false; updateCategory(item)">
                    수정
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
            <v-btn flat icon color="error" @click="deleteCategory(item)">
              <v-icon>clear</v-icon>
            </v-btn>
          </v-list-tile>
        </template>
        <v-divider></v-divider>
        <v-list-tile class="pl-2 cursor-pointer">
          <v-dialog v-model="dialog" width="500" class="mr-5">
            <v-btn slot="activator" color="secondary" flat icon class="pl-5">
              <v-icon>add</v-icon>
              카테고리 추가
            </v-btn>
            <v-card>
              <v-card-title class="headline grey lighten-2" primary-title>
                카테고리 추가
              </v-card-title>
              <v-layout row class="px-3">
                <v-flex xs12>
                  <v-text-field
                  label="카테고리이름"
                  v-model="newName"
                  ></v-text-field>
                </v-flex>
              </v-layout>
              <v-divider></v-divider>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                color="success"
                flat
                @click="dialog = false; insertCategory(newName); newName='';">
                  추가
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-list-tile>
      </v-list>
    </v-flex>
  </v-layout>
</v-container>
</template>
<script>
import { mapGetters, mapActions, mapMutations } from 'vuex'
export default {
  data: () => ({
    dialog: false,
    newName: ''
  }),
  computed: {
    ...mapGetters('category', ['getCategories'])
  },
  methods: {
    ...mapActions('category', ['insertCategory', 'updateCategory', 'deleteCategory']),
  },
}
</script>
