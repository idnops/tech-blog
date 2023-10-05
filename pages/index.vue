<template>
  <div>
    <div class="tabs-wrapper mt-2">
      <div class="tabs">
        <the-tabs @change="handleChange($event)" />
      </div>
    </div>

    <div v-if="loading" class="content">
      <post-card-default-skeleton v-for="n in 4" :key="n" />
    </div>
    <div v-else class="content">
      <post-card-default v-for="post in posts" :key="post.id" :post="post" />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import PostCardDefault from '~/components/post/card/PostCardDefault.vue'
import PostCardDefaultSkeleton from '~/components/skeletons/PostCardDefaultSkeleton.vue'

import TheTabs from '~/components/TheTabs.vue'

export default {
  components: { TheTabs, PostCardDefault, PostCardDefaultSkeleton },
  data () {
    return {
      loading: false
    }
  },

  async fetch (context) {
    await context.store.dispatch('blog/FETCH_BLOG_POSTS')
    await context.store.dispatch('blog/GET_BLOG_POSTS')
  },
  computed: {
    ...mapGetters({
      posts: 'blog/POSTS'
    })
  },
  created () {
    this.loading = true
    setTimeout(() => {
      this.loading = false
    }, 3000)
  },
  methods: {
    handleChange (url) {
      this.loading = true
      setTimeout(() => {
        this.loading = false
      }, 1000)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~vuetify/src/styles/styles.sass';

.tabs-wrapper{
  position: sticky;
  top: 0;

  z-index: 10;
}
.tabs{
  max-width: 862px;
}

.content{
  margin-top: 48px;
  padding-right: 100px;
}
</style>
