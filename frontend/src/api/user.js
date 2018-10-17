import axios from 'axios'
import config from '../config/config'

export default {
  fetch () {
    return axios.get(`${config.apiServer.url}/user`)
  },
  auth (account, password) {
    return axios.post(`${config.apiServer.url}/auth`, { account, password })
  },
  verify (token) {
    return axios.get(`${config.apiServer.url}/auth/verify?token=${token}`)
  },
  create ({ account, password, nickname, email }) {
    return axios.post(`${config.apiServer.url}/user`, { account, password, nickname, email })
  },
}
