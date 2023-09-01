<template>
  <v-container>
    <v-divider />
    <section class="header my-12">
      <h1 class="text-h4 font-weight-bold text-capitalize title">
        {{ tag }}
      </h1>
      <div class="text-caption">
        <span class="mr-1">Tag</span>
        <span class="mx-1">31K Followers</span>
        <span class="mx-1">257 Stories</span>
      </div>
      <v-btn
        small
        elevation="0"
        class="text-capitalize text-caption mt-2"
        outlined
        color="grey"
        @click="follow = !follow"
      >
        {{ follow ? 'following' : 'follow' }}
      </v-btn>
    </section>
    <section class="content pb-12">
      <h2 class="text-h5 font-weight-medium text-capitalize title my-6">
        recommended stories
      </h2>
      <v-row v-if="loading">
        <v-col v-for="n in 6" :key="n" cols="4">
          <v-skeleton-loader
            type="card, paragraph"
            height="532"
          />
        </v-col>
      </v-row>
      <v-row v-else>
        <v-col v-for="post in posts" :key="post.id" cols="4">
          <post-card-medium :post="post" />
        </v-col>
      </v-row>
      <div class="pagination mt-12">
        <v-pagination
          v-model="page"
          :color="dark ? 'grey lighten-1' : 'black'"
          :length="totalPages"
          :total-visible="7"
          circle
          light
          @input="paginate"
        />
      </div>
    </section>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex'
import PostCardMedium from '~/components/posts/PostCardMedium.vue'
export default {
  components: { PostCardMedium },
  data () {
    return {
      follow: false,
      page: 1,
      loading: false
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
      carouselPosts: 'blog/CAROUSEL,POSTS',
      totalPages: 'blog/TOTAL_PAGES'
    }),
    tag () {
      return this.$route.params.tag
    },
    dark () {
      return this.$vuetify.theme.dark
    }
  },
  watch: {
    '$route.query.page' () {
      if (!this.$route.query.page) {
        this.page = 1
        this.$store.dispatch('blog/SET_ACTIVE_LIST', 1)
      }
    }
  },
  async mounted () {
    this.loading = true
    if (this.$route.query.page) {
      this.page = +this.$route.query.page
    } else {
      this.page = 1
    }
    await this.$store.dispatch('blog/SET_ACTIVE_LIST', this.page)
    this.loading = false
  },
  methods: {
    async paginate (page) {
      if (page > 1) {
        this.loading = true
        await this.$store.dispatch('blog/SET_ACTIVE_LIST', page)
        this.$router.push(`/tag/${this.tag}?page=${page}`)
        this.loading = false
      } else {
        this.loading = true
        await this.$store.dispatch('blog/SET_ACTIVE_LIST', 1)
        this.$router.push(`/tag/${this.tag}`)
        this.loading = false
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.title{
    letter-spacing: -0.05em !important;
}
</style>
