<template>
  <v-layout align-start justify-center class="mt-5">
          <v-flex xs12 sm8 md4>
            <v-card class="elevation-12 pb-3">
              <v-toolbar dark color="warning">
                <v-toolbar-title>로그인</v-toolbar-title>
                <v-spacer></v-spacer>
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field
                  prepend-icon="person"
                  name="login"
                  label="아이디"
                  type="text"
                  v-model="authInfo.account"
                  ></v-text-field>
                  <v-text-field
                  prepend-icon="lock"
                  name="password"
                  label="비밀번호"
                  type="password"
                  v-model="authInfo.password"
                  ></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-btn block large color="secondary" @click="auth(authInfo)" @keyup.enter="auth(authInfo)">로그인</v-btn>
              </v-card-actions>
              <v-card-actions>
                <v-btn block large color="secondary">회원가입</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
</template>
<script>
import { mapActions } from 'vuex'
export default {
  data: () => ({
    authInfo: {
      account: '',
      password: ''
    },
  }),
  methods: {
    ...mapActions('user', ['auth']),
  }
}

</script>
