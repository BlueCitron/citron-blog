import axios from 'axios'
import config from '../config/config'

export default {
  // 방문자 수
  getVisitCount () {
    return axios.get(`${config.apiServer.url}/util/postview/${post_id}`)
  },

  // 조회수
  viewPost (post_id) {
    return axios.get(`${config.apiServer.url}/util/postview/${post_id}`)
  },



}
