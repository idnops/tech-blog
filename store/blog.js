import posts from '~/static/json/posts.json'

export const state = () => ({
  posts: [],
  currentPost: null
})

export const mutations = {
  SET_BLOG_POSTS: (state, payload) => {
    state.posts = payload
  },
  SET_CURRENT_POST: (state, payload) => {
    state.currentPost = payload
  }
}

export const actions = {
  FETCH_BLOG_POSTS: async (ctx) => {
    await ctx.commit('SET_BLOG_POSTS', posts)
  },
  SET_CURRENT_POST: async (ctx, payload) => {
    await ctx.commit('SET_CURRENT_POST', payload)
  }

}

export const getters = {
  POSTS: state => state.posts,
  CURRENT_POST: state => state.currentPost
}
