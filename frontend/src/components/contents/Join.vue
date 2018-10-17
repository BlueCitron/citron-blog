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

          <v-stepper-step step="3">STEP 03. 가입완료</v-stepper-step>
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
            <v-card class="mb-5" height="200px">
              <v-img
              src="./pool.jpg"
              aspect-ratio="2"
              max-height="200px"
              sizes="200px"
              ></v-img>
            </v-card>
              <v-form
              ref="form"
              v-model="valid"
              lazy-validation
              class="px-5"
              >
                <v-text-field
                  v-model="account"
                  :rules="accountRules"
                  :counter="20"
                  label="계정"
                  prepend-icon="account_box"
                  :error-messages="accountErrorMessages"
                  @blur="isDuplicatedAccount()"
                  required
                ></v-text-field>
                <v-text-field
                  v-model="password"
                  type="password"
                  :rules="passwordRules"
                  :counter="20"
                  label="비밀번호"
                  prepend-icon="lock"
                  required
                ></v-text-field>
                <v-text-field
                  v-model="passwordConfirm"
                  type="password"
                  :rules="passwordConfirmRules"
                  :counter="20"
                  label="비밀번호 재확인"
                  prepend-icon="check_box"
                  required
                ></v-text-field>
                <v-text-field
                  v-model="nickname"
                  :rules="nicknameRules"
                  :counter="20"
                  label="닉네임"
                  prepend-icon="face"
                  :error-messages="nicknameErrorMessages"
                  @blur="isDuplicatedNickname()"
                  required
                ></v-text-field>
                <v-text-field
                  v-model="email"
                  :rules="emailRules"
                  label="이메일"
                  prepend-icon="email"
                  :error-messages="emailErrorMessages"
                  @blur="isDuplicatedEmail()"
                  required
                ></v-text-field>
                <input type="text" ref="temp" style="display:none;"/>
              </v-form>
              <v-btn color="warning" @click="submit();">
                가입하기
              </v-btn>
          </v-stepper-content>

          <v-stepper-content step="3">
            <v-card class="mb-3" height="200px">
              <v-img
              src="./sea.png"
              aspect-ratio="2"
              max-height="200px"
              sizes="200px"
              ></v-img>
            </v-card>
              <v-card
              height="200px">
              <v-layout justify-center align-center column fill-height>
                <h2 class="display-3 secondary--text my-3">가입이 완료되었습니다!</h2>
                <v-btn
                color="warning"
                @click="e1 = 1"
                large
                :to="{ path: '/'}">홈으로 돌아가기</v-btn>
              </v-layout>
            </v-card>
          </v-stepper-content>
        </v-stepper-items>
      </v-stepper>

    </v-flex>

  </v-layout>
</v-container>
</template>
<script>
import utilAPI from '../../api/util'
import { mapActions } from 'vuex'
export default {
  data() {
    return {
      e1: 0,
      yak: `회원가입약관을 대충 한번 만들어봤습니다.`,
      checkbox: false,
      test: '',
      valid: true,
      account: '',
      accountRules: [
        v => !!v || '계정을 입력해주세요.',
        v => (v && v.length <= 20) || '계정은 20글자 미만으로 입력해주세요.',
      ],
      accountErrorMessages: [],
      password: '',
      passwordRules: [
        v => !!v || '비밀번호를 입력해주세요.',
        v => (v && v.length >= 6) || '비밀번호는 6글자 이상 입력해주세요.',
      ],
      passwordConfirm: '',
      passwordConfirmRules: [
        v => !!v || '다시 한 번 입력해주세요.',
        v => v === this.password || '올바르게 입력해주세요.'
      ],
      nickname: '',
      nicknameRules: [
        v => !!v || '닉네임을 입력해주세요.',
        v => (v && v.length >= 2) || '닉네임은 2글자 이상 입력해주세요.',
        v => /[\w|가-힣]{3,}/i.test(v) || '닉네임이 적절하지 않아요.',
      ],
      nicknameErrorMessages: [],
      email: '',
      emailRules: [
        v => !!v || '이메일을 입력해주세요.',
        v => /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i.test(v) || '올바른 이메일을 입력해주세요.',
      ],
      emailErrorMessages: [],
    }
  },
  methods: {
    ...mapActions('user', ['create']),
    submit () {
      this.$refs.temp.focus()
      setTimeout(() => {
        if (this.$refs.form.validate()
        && this.accountErrorMessages.length == 0
        && this.nicknameErrorMessages.length == 0
        && this.emailErrorMessages.length == 0) {
          // 제출
          const user = {
            account: this.account,
            password: this.password,
            nickname: this.nickname,
            email: this.email
          }
          this.create(user).then(result => {
            // 결과(success)가 true 면 다음단계
            if(result)
              this.e1 = 3
          })
        }
      }, 100)
    },
    async isDuplicatedAccount () {
      let { data } = await utilAPI.isDuplicatedAccount(this.account)
      console.log('Account')
      if (!data.success)
        this.accountErrorMessages.push('중복된 계정 입니다.')
      else
        this.accountErrorMessages.pop()
    },
    async isDuplicatedNickname () {
      let { data } = await utilAPI.isDuplicatedNickname(this.nickname)
      console.log('Nickname')
      if (!data.success)
        this.nicknameErrorMessages.push('중복된 닉네임 입니다.')
      else
        this.nicknameErrorMessages.pop()
    },
    async isDuplicatedEmail () {
      let { data } = await utilAPI.isDuplicatedEmail(this.email)
      console.log('Email')
      if (!data.success)
        this.emailErrorMessages.push('중복된 이메일 입니다.')
      else
        this.emailErrorMessages.pop()
    }
  },
}
</script>
