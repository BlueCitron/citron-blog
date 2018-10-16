<template>
<v-container>

  <v-layout justify-center align-center class="mt-1">
    <v-flex md7>
      <v-stepper v-model="e1">
        <v-stepper-header>
          <v-stepper-step :complete="e1 > 1" step="1">STEP 01. 약관동의</v-stepper-step>

          <v-divider></v-divider>

          <v-stepper-step :complete="e1 > 2" step="2">STEP 02. 정보입력</v-stepper-step>

          <v-divider></v-divider>

          <v-stepper-step step="3">STEP 03. 가입완료</v-stepper-step>{{e1}}
        </v-stepper-header>

        <v-stepper-items>
          <v-stepper-content step="1">
            <v-card class="mb-5" color="" height="400px">
              <v-subheader>회원가입 약관</v-subheader>
              <v-divider></v-divider>
              <v-textarea :value="yak" readonly></v-textarea>
              <v-layout justify-end>
                <v-checkbox :label="`동의합니다 `" v-model="checkbox"></v-checkbox>
              </v-layout>
            </v-card>
            <v-btn color="warning" @click="e1 = checkbox ? 2 : 1">
              동의합니다
            </v-btn>
            <v-btn
            flat
            :to="{ path: '/' }"
            >동의하지않습니다</v-btn>
          </v-stepper-content>

          <v-stepper-content step="2">
            <v-card class="mb-5" color="grey lighten-1" height="200px"></v-card>
              <v-form ref="form" v-model="valid" lazy-validation>
                <v-text-field
                  v-model="account"
                  :rules="accountRules"
                  :counter="20"
                  label="계정"
                  required
                ></v-text-field>
                <v-text-field
                  v-model="password"
                  type="password"
                  :rules="passwordRules"
                  label="비밀번호"
                  required
                ></v-text-field>
                <v-text-field
                  v-model="passwordConfirm"
                  type="password"
                  :rules="passwordConfirmRules"
                  label="비밀번호 확인"
                  required
                ></v-text-field>
                <v-text-field
                  v-model="nickname"
                  :rules="nicknameRules"
                  label="닉네임"
                  required
                ></v-text-field>
                <v-text-field
                  v-model="email"
                  :rules="emailRules"
                  label="이메일"
                  required
                ></v-text-field>
              </v-form>
              <v-btn color="warning" @click="submit();">
                가입하기
              </v-btn>
          </v-stepper-content>

          <v-stepper-content step="3">
            <v-card class="mb-5" color="grey lighten-1" height="200px"></v-card>

            <v-btn color="primary" @click="e1 = 1">
              Continue
            </v-btn>

            <v-btn flat>Cancel</v-btn>
          </v-stepper-content>
        </v-stepper-items>
      </v-stepper>

    </v-flex>

  </v-layout>
</v-container>
</template>
<script>
import { mapActions } from 'vuex'
export default {
  data() {
    return {
      e1: 0,
      yak: `회원가입약관을 대충 한번 만들어봤습니다.`,
      checkbox: false,

      valid: true,
      name: '',
      nameRules: [
        v => !!v || '계정을 입력해주세요.',
        v => (v && v.length <= 20) || '계정은 20글자 미만으로 입력해주세요.',
        // 중복 검사
      ],
      password: '',
      passwordRules: [
        v => !!v || '비밀번호를 입력해주세요.',

      ],
      passwordConfirm: '',
      passwordConfirmRules: [
        v => !!v || '다시 한 번 입력해주세요.',
        v => v === this.password || '올바르게 입력해주세요.'
      ],
      nickname: '',
      nicknameRules: [
        v => !!v || '닉네임을 입력해주세요.',
        // 중복 검사
      ],
      email: '',
      emailRules: [
        v => !!v || '이메일을 입력해주세요.',
        v => /.+@.+/.test(v) || '올바른 이메일을 입력해주세요.'
      ],
    }
  },
  methods: {
    ...mapActions('user', ['']),
    submit () {
      if (this.$refs.form.validate()) {
        // 제출

        this.e1 = 3
      }
    }
  }
}
</script>
