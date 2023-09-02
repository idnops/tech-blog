<template>
  <v-container>
    <section class="carousel d-none d-lg-block mb-12">
      <the-carousel :posts="posts" />
    </section>
    <section class="content pb-12">
      <div class="header py-6">
        <h2 class="text-h4 font-weight-bold text-capitalize title">
          Latest stories
        </h2>
        <v-btn
          small
          plain
          :ripple="false"
          class="text-capitalize text-body-1 pa-0"
          nuxt
          to="/tag/latest"
        >
          view all
        </v-btn>
      </div>
      <v-row>
        <v-col v-for="post in posts" :key="post.id" cols="12" sm="6" lg="4">
          <post-card-medium :post="post" />
        </v-col>
      </v-row>
    </section>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex'
import TheCarousel from '~/components/carousel/TheCarousel.vue'
import PostCardMedium from '~/components/post/card/PostCardMedium.vue'
export default {
  components: { TheCarousel, PostCardMedium },
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
@import '~vuetify/src/styles/settings/_variables';

.title{
    letter-spacing: -0.05em !important;
}

@media #{map-get($display-breakpoints, 'xs-only')} {
    .content{
      padding: 14px;
    }
}
</style>
