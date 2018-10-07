import jwt from 'jsonwebtoken'

const SECRET = 'YogertStrawberry'

export const authMiddleware = (req, res, next) => {
  const token = req.headers['authorization'] || req.headers['x-access-token'] || req.query.token

  if(!token) {
    res.status(400).json({
      success: false,
      message: "Access token doesn't exists."
    })
  }

  const decode = new Promise((resolve, reject) => {
    jwt.verify(token, SECRET, (err, decoded) => {
      if (err) reject(err)
      resolve(decoded)
    })
  })

  const onError = (error) => {
    res.stats(403).json({
      success: false,
      message: error.message
    })
  }

  decode.then((decoded) => {
    req.decoded = decoded
    next()
  }).catch(onError)

}
