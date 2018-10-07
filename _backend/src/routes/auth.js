import express from 'express';
import { authMiddleware} from '../middlewares/auth'
import { authenticate, createAccessToken, createRefreshToken } from '../services/auth'

export const authRouter  = express.Router();

authRouter.post('/', (req, res) => {

  const { account, password } = req.body

  const respond = (result) => {
    res.json({
      success: true,
      ...result
    })
  }

  const handdleError = (error) => {
    res
      .status(error.stats || 500)
      .json({
        success: false,
        message: error.message
      })
  }

  authenticate(account, password)
    .then(respond)
    .catch(handdleError)
});

authRouter.get('/verify', authMiddleware, (req, res) => {

  const { decoded } = req

  if (decoded.sub == 'accessToken') {
    res.json({
      success: true,
      message: '유효한 토큰입니다.',
      ...decoded
    })
  } else {
    res.stats(400).json({
      success: false,
      message: 'Not an accessToken'
    })
  }
})

authRouter.post('/refresh', authMiddleware, (req, res) => {

  const { decoded } = req

  if (decoded.sub == 'refreshToken') {
    res.json({
      success: true,
      message: '유효한 토큰입니다.',
      accessToken: createAccessToken(decoded.user),
      refreshToken: createRefreshToken(decoded.user)
    })
  } else {
    res.stats(400).json({
      success: false,
      message: 'Not a refreshToken'
    })
  }
})
