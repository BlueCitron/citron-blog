import axios from 'axios'
import config from '../config/config'

export default {
  fetch(category_id) {
    return axios.get(`${config.apiServer.url}/post/${category_id}`)
  },
  write(post) {
    return axios.post(`${config.apiServer.url}/post`, { post })
  },  
}
