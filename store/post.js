import { getDatabase, ref, set } from 'firebase/database'
import { v4 as uuidv4 } from 'uuid'
import app from '~/plugins/firebase'

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
  },

  PUBLISH: async ({ rootState }, payload) => {
    const id = uuidv4()
    const { body, tags } = payload

    const db = getDatabase(app)

    const user = rootState.auth.user
    await set(ref(db, `articles/${user.uid}/${id}`), {
      id,
      body,
      tags
    })
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
