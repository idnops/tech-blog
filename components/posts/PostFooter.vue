<template>
  <div class="post-footer">
    <v-avatar size="72" color="grey">
      <v-img v-if="avatar" :src="avatar" />
      <span
        v-else
        class="text-caption text-uppercase"
      >{{ getInitials(author) }}</span>
    </v-avatar>
    <div class="author-details pt-6 pb-2">
      <h5 class="text-h5 font-weight-bold">
        Written by {{ author }}
      </h5>
      <span class="text-caption">1,903 Followers</span>
    </div>
    <v-btn small elevation="0" class="text-capitalize text-caption">
      follow
    </v-btn>
    <div class="signature mt-6 mb-8">
      <span class="text-caption">Leader learning to be better Manager. In all of my articles, you will sense thinking in systems, solution-focused coaching practice, and a sip of stoicism.</span>
    </div>
    <v-divider />
    <h6 class="text-h6 mt-6 mb-8">
      More from {{ author }}
    </h6>
    <v-row>
      <v-col v-for="post in posts" :key="post.id" cols="4">
        <post-card-medium :post="post" />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

import PostCardMedium from './PostCardMedium.vue'
import profile from '~/mixins/profile.js'
export default {
  components: { PostCardMedium },
  mixins: [profile],
  props: {
    author: {
      type: String,
      required: true
    },
    avatar: {
      type: String,
      required: false,
      default: () => ''
    }

  },
  computed: {
    ...mapGetters({
      posts: 'blog/POSTS'
    })
  }

}
</script>

<style lang="scss" scoped>
.signature{
    width: 50%;
}
</style>
