import Cookie from 'js-cookie'

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
    await this.$fire.auth.signInWithEmailAndPassword(email, password)

    const user = this.$fire.auth.currentUser
    const token = await user.getIdToken()
    Cookie.set('access_token', token)

    commit('SET_USER', {
      name: user.displayName,
      email: user.email,
      photoUrl: user.photoUrl,
      uid: user.uid
    })
  },

  async SIGN_UP ({ commit }, payload) {
    const { name, username, email, password } = payload
    await this.$fire.auth.createUserWithEmailAndPassword(email, password, name, username)
    const user = this.$fire.auth.currentUser

    commit('SET_USER', {
      name: user.displayName,
      email: user.email,
      photoUrl: user.photoUrl,
      uid: user.uid
    })
  },

  async SIGN_OUT ({ commit }) {
    await this.$fire.auth.signOut()
    Cookie.remove('access_token')
    commit('REMOVE_USER')
  }
}

export const getters = {
  USER: (state) => {
    return state.user
  }
}
