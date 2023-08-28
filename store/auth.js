import axios from 'axios'

export const state = () => ({
  user: {
    name: 'aydin',
    username: 'idn',
    email: 'aydin@write.com'
  }
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
  SIGN_IN: async (ctx, payload) => {
    const res = await axios.post('/api/auth/signin', payload)
    ctx.commit('SET_USER', res.data)
  },

  SIGN_OUT: (ctx) => {
    ctx.commit('REMOVE_USER')
  }
}

export const getters = {
  USER: (state) => {
    return state.user
  }
}
