import axios from 'axios'
import config from '../config/config'
/* @return Promise([pending]) */
export default {
  fetch() {
    return axios.get(config.apiServer.url + '/category')
  },
  insert ({ name, createdBy }) {
    return axios.post(config.apiServer.url + '/category', { name, createdBy })
  },
  update (category_id, category) {
    return axios.put(config.apiServer.url + `/category/${category_id}`, { category })
  },
  delete (category_id) {
    return axios.delete(config.apiServer.url + `/category/${category_id}`)
  }
}
