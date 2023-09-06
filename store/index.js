import cookieparser from 'cookieparser'
import JWTDecode from 'jwt-decode'

export const actions = {
  nuxtServerInit ({ commit }, { app, req }) {
    if (process.server && process.static) { return }
    if (!req.headers.cookie) { return }

    const parsed = cookieparser.parse(req.headers.cookie)
    const accessTokenCookie = parsed.access_token

    if (!accessTokenCookie) { return }

    const decoded = JWTDecode(accessTokenCookie)

    if (decoded) {
      commit('auth/SET_USER', {
        email: decoded.email,
        uid: decoded.user_id
      })
    }
  }
}
