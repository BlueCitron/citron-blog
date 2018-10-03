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
                  <v-text-field prepend-icon="person" name="login" label="아이디" type="text"></v-text-field>
                  <v-text-field id="password" prepend-icon="lock" name="password" label="비밀번호" type="password"></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <!-- <v-spacer></v-spacer> -->
                <v-btn block color="secondary">로그인</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
</template>
