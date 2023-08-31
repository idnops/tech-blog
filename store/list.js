export const state = () => ({
  lists: [
    {
      name: 'reading list',
      description: '',
      posts: []
    }
  ],
  dialog: false,
  triggerId: null
})

export const mutations = {
  ADD_BOOKMARK_LIST: (state, payload) => {
    state.lists.push(payload)
  },

  ADD_POST_TO_LIST: (state, payload) => {
    if (!payload.list) {
      state.lists[0].posts.push(payload)
    } else {
      const index = state.lists.findIndex(list => list.name === payload.list.name)
      state.lists[index].posts.push(payload.postId)
    }
  },

  UPDATE_POST_LIST: (state, payload) => {
    const { lists, postId } = payload

    // find not selected lists
    const uLists = state.lists.filter(list => !lists.includes(list))
    // remove postId from not selected lists
    uLists.forEach((list) => {
      if (list.posts.includes(postId)) {
        const listIndex = state.lists.findIndex(l => l.name === list.name)
        const index = list.posts.findIndex(id => id === postId)
        state.lists[listIndex].posts.splice(index, 1)
      }
    })
    // add postId to selected lists
    lists.forEach((list) => {
      if (list.posts.includes(postId)) { return }
      const listIndex = state.lists.findIndex(l => l.name === list.name)
      state.lists[listIndex].posts.push(postId)
    })
  },

  OPEN_LIST_DIALOG: (state) => {
    state.dialog = true
  },

  CLOSE_LIST_DIALOG: (state) => {
    state.dialog = false
  },

  SET_TRIGGER_ID: (state, payload) => {
    state.triggerId = payload
  },

  REMOVE_TRIGGER_ID: (state) => {
    state.triggerId = null
  }

}

export const actions = {
  CREATE_BOOKMARK_LIST: async (ctx, payload) => {
    await ctx.commit('ADD_BOOKMARK_LIST', payload)
  },

  ADD_POST_TO_LIST: async (ctx, payload) => {
    await ctx.commit('ADD_POST_TO_LIST', payload)
  },

  UPDATE_POST_LIST: async (ctx, payload) => {
    await ctx.commit('UPDATE_POST_LIST', payload)
  },

  OPEN_LIST_DIALOG: async (ctx, payload) => {
    await ctx.commit('OPEN_LIST_DIALOG')
    await ctx.commit('SET_TRIGGER_ID', payload)
  },

  CLOSE_LIST_DIALOG: async (ctx) => {
    await ctx.commit('CLOSE_LIST_DIALOG')
    await ctx.commit('REMOVE_TRIGGER_ID')
  }
}

export const getters = {
  LISTS: state => state.lists,
  DIALOG: state => state.dialog,
  TRIGGER_ID: state => state.triggerId
}
