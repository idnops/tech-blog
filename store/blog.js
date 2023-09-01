import posts from '~/static/json/posts.json'

export const state = () => ({
  posts: [],
  lists: [],
  active: [],
  postPerPage: 6,
  currentPost: null
})

export const mutations = {
  SET_BLOG_POSTS: (state, payload) => {
    state.posts = payload
    state.lists = []

    for (let i = 0, j = 0; i < state.posts.length; i += state.postPerPage, j++) {
      const chunk = state.posts.slice(i, i + state.postPerPage)
      const res = {
        list: chunk,
        pagination: {
          page: j + 1
        }
      }
      state.lists.push(res)
    }

    state.active = state.lists[0]
  },

  SET_CURRENT_POST: (state, payload) => {
    state.currentPost = payload
  },

  SET_ACTIVE_LIST: (state, payload) => {
    state.active = state.lists.find(list => list.pagination.page === payload)
  }
}

export const actions = {
  FETCH_BLOG_POSTS: async (ctx) => {
    await ctx.commit('SET_BLOG_POSTS', posts)
  },

  SET_CURRENT_POST: async (ctx, payload) => {
    await ctx.commit('SET_CURRENT_POST', payload)
  },

  SET_ACTIVE_LIST: async (ctx, payload) => {
    await ctx.commit('SET_ACTIVE_LIST', payload)
  }

}

export const getters = {
  POSTS: state => state.posts,
  CURRENT_POST: state => state.currentPost,
  ACTIVE_POSTS: state => state.active.list,
  CAROUSEL_POSTS: state => state.lists[0].list,
  TOTAL_PAGES: state => state.lists.length
}
