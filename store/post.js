import { equalTo, getDatabase, orderByChild, query, ref, set, get } from 'firebase/database'
import { v4 as uuidv4 } from 'uuid'
import slug from 'slug'
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
    const { body, tags, title, subtitle } = payload
    const db = getDatabase(app)

    // check if tag exists just increment used property else create one
    tags.forEach(async (tag) => {
      const t = (await get(query(ref(db, 'tags'), orderByChild('name'), equalTo(tag)))).val()
      console.log(t)
      if (!t) {
        await set(ref(db, `tags/${uuidv4()}`), {
          name: tag,
          slug: slug(tag),
          used: 1
        })
      } else {
        console.log('needs to be updated')
        // await update(reg(db, `tags/${Object.keys(t)[0]}`), {used})
      }
    })

    const previewImageUrl = body.blocks.find(b => b.type === 'image').data.file.url

    const user = rootState.auth.user
    const id = uuidv4()

    await set(ref(db, `articles/${id}`), {
      author: user.uid,
      slug: slug(title),
      body,
      tags,
      title,
      subtitle,
      photoUrl: previewImageUrl
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
