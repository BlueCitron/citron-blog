import axios from 'axios'
import config from '../config/config'

export default {
  fetch () {
    return axios.get(`${config.apiServer.url}/user`)
  },
  login(loginInfo) {

  }
}
