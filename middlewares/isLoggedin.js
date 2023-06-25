import { getTokenFromHeader } from '../utils/getTokenFromHeader.js'
import { verifyToken } from '../utils/verifyToken.js'

export const isLoggedIn = (req, res, next) => {
  // get token from header
  const token = getTokenFromHeader(req)
  // verify the token
  const decodeUser = verifyToken(token)

  if (!decodeUser) {
    throw new Error('Invalid/Expired token, please login again')
  } else {
    // save the user into req obj
    req.userAuthId = decodeUser?.id
    next()
  }
}
