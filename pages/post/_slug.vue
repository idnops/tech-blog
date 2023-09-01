<template>
  <div>
    <section>
      <v-container>
        <v-divider class="mb-6" />
        <v-breadcrumbs :items="crumbs" class="pa-0 my-6" />
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
  data () {
    return {
      crumbs: [
        {
          text: 'Home',
          disabled: false,
          href: '/'
        },
        {
          text: 'Gadget',
          disabled: false,
          href: '/?tag=gadget'
        }
      ]
    }
  },
  computed: {
    ...mapGetters({
      posts: 'blog/POSTS'
    }),
    currentPost () {
      return this.posts.find(post => post.slug === this.$route.params.slug)
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
.footer.dark{
  background-color: #fff;
}
.footer.light{
  background-color: #1e1e1e;
}
</style>
