import jwt from 'jsonwebtoken'
import crypto from 'crypto'
import { User } from '../models/user'

const SECRET = 'YogertStrawberry'

export const createAccessToken = (userInfo) => {
  return jwt.sign(
    { user: userInfo },
    SECRET,
    {
      expiresIn: '1d',
      issuer: 'BlueCitron',
      subject: 'accessToken'
    }
   )
}

export const createRefreshToken = (userInfo) => {
  return jwt.sign(
    { user: userInfo },
    SECRET,
    {
      expiresIn: '14d',
      issuer: 'BlueCitron',
      subject: 'refreshToken'
    }
   )
}

export const authenticate = async (account, password) => {

  const user = await User.findOne({ account })

  if(!user) {
    const userNotFoundException = new Error('사용자를 찾을 수 없습니다.')
    userNotFoundException.status = 404
    throw userNotFoundException
  }

  const encryptedPassword = crypto.createHmac('sha256', SECRET).update(password).digest('base64')

  if(user.password != encryptedPassword) {
    const passwordNotMatchedException = new Error('패스워드가 일치하지 않아요.')
    passwordNotMatchedException.status = 401
    throw passwordNotMatchedException
  }

  const { _id, nickname, createdAt, lastLogin, accountType } = user
  const userInfo = { _id, nickname, createdAt, lastLogin, accountType }

  const accessToken = createAccessToken(userInfo)
  const refreshToken = createRefreshToken(userInfo)

  return { accessToken, refreshToken }
}
