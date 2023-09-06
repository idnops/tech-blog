export const state = () => ({
  article: {
    body: null
  },
  draftStatus: ''
})

export const mutations = {
  CHANGE_DRAFT_STATUS: (state, payload) => {
    state.draftStatus = payload
  },

  SAVE_TO_DRAFT: (state, payload) => {
    state.article.body = payload
  }
}

export const actions = {
  CHANGE_DRAFT_STATUS: async (ctx, payload) => {
    await ctx.commit('CHANGE_DRAFT_STATUS', payload)
  },

  SAVE_TO_DRAFT: async (ctx, payload) => {
    await ctx.commit('SAVE_TO_DRAFT', payload)
  }
}

export const getters = {
  DRAFT: state => state.article.body,
  DRAFT_STATUS: state => state.draftStatus,
  WORD_COUNT: (state) => {
    let count = 0
    if (state.article.body) {
      state.article.body.blocks.forEach((block) => {
        if (block.data.text) {
          count += block.data.text.split(' ').length
        }
        if (block.data.items) {
          block.data.items.forEach((item) => {
            count += item.split(' ').length
          })
        }
      })
    }
    return count
  },
  READING_TIME: (state, getters) => {
    return Math.ceil(getters.WORD_COUNT / 250)
  }
}
