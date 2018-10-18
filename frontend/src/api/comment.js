import axios from 'axios'
import config from '../config/config'

export default {
  fetch () {
    return axios.get(config.apiServer.url + '/comment')
  },
  insert (comment) {
    return axios.post(config.apiServer.url + '/comment', { comment })
  },
  delete (comment_id) {
    return axios.delete(`${config.apiServer.url}/comment/${comment_id}`)
  }
}
