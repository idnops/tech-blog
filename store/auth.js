import Cookie from 'js-cookie'

import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithCredential,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut
} from 'firebase/auth'
import { getDatabase, ref, set } from 'firebase/database'
import app from '~/plugins/firebase'

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

  RESTORE_USER ({ commit }) {
    const auth = getAuth()
    onAuthStateChanged(auth, (user) => {
      commit('SET_USER', {
        name: user.displayName,
        email: user.email,
        photoUrl: user.photoURL,
        uid: user.uid
      })
    })
  },

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

    const newUser = {
      email: user.email,
      name: user.displayName,
      username: user.displayName,
      photoUrl: user.photoURL
    }
    const db = getDatabase(app)
    await set(ref(db, `users/${user.uid}`), newUser)

    Cookie.set('access_token', user.accessToken)
    commit('SET_USER', { ...newUser, uid: user.uid })
  },

  async SIGN_IN_WITH_GOOGLE_CREDENTIAL ({ commit }, idToken) {
    const auth = getAuth()
    const credential = GoogleAuthProvider.credential(idToken)
    const { user } = await signInWithCredential(auth, credential)

    const newUser = {
      email: user.email,
      name: user.displayName,
      username: user.displayName,
      photoUrl: user.photoURL
    }
    const db = getDatabase(app)
    await set(ref(db, `users/${user.uid}`), newUser)

    Cookie.set('access_token', user.accessToken)
    commit('SET_USER', { ...newUser, uid: user.uid })
  },

  async SIGN_UP ({ commit }, payload) {
    const { email, password, name, username } = payload

    const auth = getAuth()
    const { user } = await createUserWithEmailAndPassword(auth, email, password)
    const newUser = {
      name,
      username,
      email
    }
    const db = getDatabase(app)
    await set(ref(db, `users/${user.uid}`), newUser)

    Cookie.set('access_token', user.accessToken)
    commit('SET_USER', { ...newUser, uid: user.uid })
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
