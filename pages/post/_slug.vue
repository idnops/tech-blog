<template>
  <div>
    <section>
      <v-container>
        <v-divider class="mb-6" />
        <v-breadcrumbs :items="crumbs" class="pa-0 my-6 text-capitalize" />
      </v-container>
    </section>
    <section>
      <v-container>
        <post-item :post="currentPost" />
      </v-container>
    </section>
    <section class="footer pt-12 mt-12" :class="[!dark ? 'dark' : 'light']">
      <v-container>
        <post-footer
          :author="currentPost.author"
          avatar="/avatar.jpg"
          :post-id="currentPost.id"
          :signature="currentPost.signature"
        />
      </v-container>
    </section>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import PostItem from '~/components/post/PostItem.vue'
import PostFooter from '~/components/post/PostFooter.vue'
export default {
  components: { PostItem, PostFooter },
  async asyncData ({ store }) {
    await store.dispatch('blog/FETCH_BLOG_POSTS')
  },
  computed: {
    ...mapGetters({
      posts: 'blog/POSTS'
    }),
    currentPost () {
      return this.posts.find(post => post.slug === this.$route.params.slug)
    },
    crumbs () {
      return [
        {
          text: 'home',
          href: '/'
        },
        {
          text: this.currentPost.tags[0],
          disabled: false,
          href: `/tag/${this.currentPost.tags[0]}`
        }
      ]
    },
    dark () {
      return this.$vuetify.theme.dark
    }
  },
  async mounted () {
    await this.$store.dispatch('blog/SET_CURRENT_POST', this.currentPost)
  }
}
</script>

<style lang="scss" scoped>
@import '~vuetify/src/styles/settings/_variables';

.footer.dark{
  background-color: #fff;
}
.footer.light{
  background-color: #1e1e1e;
}

@media #{map-get($display-breakpoints, 'xs-only')} {
    section{
      padding: 14px;
    }
}
</style>
