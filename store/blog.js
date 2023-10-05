import { getDatabase, ref, child, get, query, limitToLast, orderByChild, equalTo } from 'firebase/database'
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
  },

  GET_BLOG_POSTS: async ({ commit }) => {
    const dbRef = ref(getDatabase())
    const db = getDatabase()
    const recentPostsRef = query(ref(db, 'articles'), limitToLast(100), orderByChild('time'))
    const res = (await get(recentPostsRef)).val()
    const posts = []

    Object.keys(res).forEach((key) => {
      posts.push({ id: key, ...res[key] })
    })

    const postWithAuthors = await Promise.all(posts.map(async (post) => {
      const author = (await get(child(dbRef, `users/${post.author}`))).val()
      const tags = await Promise.all(post.tags.map(async (tag) => {
        return (await get(query(ref(db, 'tags'), orderByChild('name'), equalTo(tag)))).val()
      }))

      post.author = author
      post.tags = []
      tags.forEach((tag) => {
        if (tag) {
          Object.keys(tag).forEach((key) => {
            post.tags.push({ id: key, ...tag[key] })
          })
        }
      })

      return post
    }).reverse())

    commit('SET_BLOG_POSTS', postWithAuthors)
  }

}

export const getters = {
  POSTS: state => state.posts,
  CURRENT_POST: state => state.currentPost,
  ACTIVE_POSTS: state => state.active.list,
  CAROUSEL_POSTS: state => state.lists[0].list,
  TOTAL_PAGES: state => state.lists.length
}
