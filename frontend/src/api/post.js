import axios from 'axios'
import config from '../config/config'

export default {
  fetch (category_id) {
    return axios.get(`${config.apiServer.url}/post/${category_id}`)
  },
  write (post) {
    return axios.post(`${config.apiServer.url}/post`, { post })
  },
  delete (post_id) {
    return axios.delete(`${config.apiServer.url}/post/${post_id}`)
  },
  latest () {
    return axios.get(`${config.apiServer.url}/post/latest`)
  },
  getNotices () {
    return axios.get(`${config.apiServer.url}/post/notices`)
  }
}
