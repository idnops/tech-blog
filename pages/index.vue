<template>
  <the-post-carousel :posts="posts" />
</template>

<script>
import { mapGetters } from 'vuex'
import ThePostCarousel from '~/components/posts/ThePostCarousel.vue'
export default {
  components: { ThePostCarousel },
  async asyncData ({ store }) {
    await store.dispatch('blog/FETCH_BLOG_POSTS')
  },
  head: {
    title: 'Your story needs to br written!',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Your story needs to br written!'
      }
    ]
  },
  computed: {
    ...mapGetters({
      posts: 'blog/POSTS'
    })
  }
}
</script>
