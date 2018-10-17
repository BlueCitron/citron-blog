import axios from 'axios'
import config from '../config/config'

export default {
  // TODO 방문자 수
  getVisitCount () {
    return axios.get(`${config.apiServer.url}/util/postview/${post_id}`)
  },

  // 조회수
  viewPost (post_id) {
    return axios.get(`${config.apiServer.url}/util/postview/${post_id}`)
  },

  // 계정 중복 검사
  isDuplicatedAccount (account) {
    return axios.get(`${config.apiServer.url}/util/duplicate?account=${account}`)
  },

  // 닉네임 중복 검사
  isDuplicatedNickname (nickname) {
    return axios.get(`${config.apiServer.url}/util/duplicate?nickname=${nickname}`)
  },

  // 이메일 중복 검사
  isDuplicatedEmail (email) {
    return axios.get(`${config.apiServer.url}/util/duplicate?email=${email}`)
  }

}
