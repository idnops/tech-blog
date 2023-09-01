<template>
  <v-container>
    <section class="carousel">
      <the-post-carousel :posts="posts" />
    </section>
    <section class="cards mt-12 pb-12">
      <div class="header py-6">
        <h2 class="text-h4 font-weight-bold text-capitalize title">
          Latest stories
        </h2>
        <span class="body-1">View all</span>
      </div>
      <v-row>
        <v-col v-for="post in posts" :key="post.id" cols="4">
          <post-card-medium :post="post" />
        </v-col>
      </v-row>
    </section>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex'
import ThePostCarousel from '~/components/posts/ThePostCarousel.vue'
import PostCardMedium from '~/components/posts/PostCardMedium.vue'
export default {
  components: { ThePostCarousel, PostCardMedium },
  data () {
    return {
      page: 1
    }
  },
  async fetch () {
    await this.$store.dispatch('blog/FETCH_BLOG_POSTS')
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
      posts: 'blog/ACTIVE_POSTS',
      carouselPosts: 'blog/CAROUSEL,POSTS'
    })
  }
}
</script>

<style lang="scss" scoped>
.title{
    letter-spacing: -0.05em !important;
}
</style>
