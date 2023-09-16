export const state = () => ({
  visible: false,
  persistent: false,
  maxWidth: 700,
  content: ''
})

export const mutations = {
  SHOW_DIALOG: (state, options) => {
    const { persistent, maxWidth, content } = options
    state.visible = true
    state.persistent = persistent || state.persistent
    state.maxWidth = maxWidth || state.maxWidth
    state.content = content || state.content
  },

  HIDE_DIALOG: (state) => {
    state.visible = false
    state.persistent = false
    state.maxWidth = 700
    state.content = ''
  }
}

export const actions = {
  SHOW_DIALOG: ({ commit }, options) => {
    commit('SHOW_DIALOG', options)
  },

  HIDE_DIALOG: ({ commit }) => {
    commit('HIDE_DIALOG')
  }
}
