<template>
  <div>
    <v-divider class="mb-6" />
    <v-breadcrumbs :items="crumbs" class="pa-0 my-6" />
    <post-item :post="currentPost" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import PostItem from '~/components/posts/PostItem.vue'
export default {
  components: { PostItem },
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
    }
  },
  async mounted () {
    await this.$store.dispatch('blog/SET_CURRENT_POST', this.currentPost)
  }
}
</script>
