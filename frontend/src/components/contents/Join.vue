<template>
<v-container>
  <v-layout justify-center align-center class="mt-1">
    <v-flex md7>
      {{e1}}
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
              {{checkbox}}
            </v-card>
            <v-btn color="warning" @click="e1 = 2">
              동의합니다
            </v-btn>
            <v-btn flat>동의하지않습니다</v-btn>
          </v-stepper-content>

          <v-stepper-content step="2">
            <v-card class="mb-5" color="grey lighten-1" height="200px"></v-card>

            <v-btn color="primary" @click="e1 = 3">
              Continue
            </v-btn>

            <v-btn flat>Cancel</v-btn>
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
export default {
  data() {
    return {
      e1: 0,
      yak: `회원가입약관을 대충 한번 만들어봤습니다.`,
      checkbox: false

    }
  }
}
</script>
