export const state = () => ({
  lists: [
    {
      name: 'reading list',
      description: '',
      posts: []
    },
    {
      name: 'free time reading',
      description: '',
      posts: []
    }
  ]
})

export const mutations = {
  ADD_BOOKMARK_LIST: (state, payload) => {
    state.lists.push(payload)
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
  }

}

export const actions = {
  CREATE_BOOKMARK_LIST: async (ctx, payload) => {
    await ctx.commit('ADD_BOOKMARK_LIST', payload)
  },
  UPDATE_POST_LIST: async (ctx, payload) => {
    await ctx.commit('UPDATE_POST_LIST', payload)
  }
}

export const getters = {
  LISTS: state => state.lists
}
