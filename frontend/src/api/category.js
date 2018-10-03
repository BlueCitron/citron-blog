import axios from 'axios'
import config from '../config/config'
/* @return Promise([pending]) */
export default {
  fetch() {
    return axios.get(config.apiServer.url + '/category')
  } 
}
