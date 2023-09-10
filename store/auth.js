import Cookie from 'js-cookie'
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut
} from 'firebase/auth'

export const state = () => ({
  user: null
})

export const mutations = {
  SET_USER: (state, payload) => {
    state.user = payload
  },
  REMOVE_USER: (state) => {
    state.user = null
  }
}

export const actions = {

  async SIGN_IN ({ commit }, payload) {
    const { email, password } = payload

    const auth = getAuth()
    const { user } = await signInWithEmailAndPassword(auth, email, password)

    Cookie.set('access_token', user.accessToken)

    commit('SET_USER', {
      name: user.displayName,
      email: user.email,
      photoUrl: user.photoURL,
      uid: user.uid
    })
  },

  async SIGN_IN_WITH_GOOGLE ({ commit }, payload) {
    const provider = new GoogleAuthProvider()

    const auth = getAuth()
    const { user } = await signInWithPopup(auth, provider)

    Cookie.set('access_token', user.accessToken)

    commit('SET_USER', {
      name: user.displayName,
      email: user.email,
      photoUrl: user.photoURL,
      uid: user.uid
    })
  },

  async SIGN_UP ({ commit }, payload) {
    const { email, password } = payload

    const auth = getAuth()
    const { user } = await createUserWithEmailAndPassword(auth, email, password)

    Cookie.set('access_token', user.accessToken)

    commit('SET_USER', {
      name: user.displayName,
      email: user.email,
      photoUrl: user.photoURL,
      uid: user.uid
    })
  },

  async SIGN_OUT ({ commit }) {
    const auth = getAuth()

    await signOut(auth)
    Cookie.remove('access_token')
    commit('REMOVE_USER')
  }
}

export const getters = {
  USER: (state) => {
    return state.user
  }
}
