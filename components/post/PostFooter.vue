<template>
  <div class="post-footer pb-12">
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
    <v-btn small elevation="0" class="text-capitalize text-caption" @click="follow = !follow">
      {{ follow ? 'following' : 'follow' }}
    </v-btn>
    <div class="signature mt-6 mb-8">
      <span class="text-caption">{{ signature }}</span>
    </div>
    <div v-if="authorPosts.length" class="more pb-12">
      <v-divider />
      <h6 class="text-subtitle-1 font-weight-medium mt-6 mb-8">
        More from {{ author }}
      </h6>
      <v-row>
        <v-col v-for="post in authorPosts" :key="post.id" cols="12" sm="6" lg="4">
          <post-card-medium :post="post" />
        </v-col>
      </v-row>
    </div>
    <div v-if="suggestedPosts.length" class="suggestions">
      <v-divider />
      <h6 class="text-subtitle-1 font-weight-medium mt-6 mb-8">
        Recommendations from same topic
      </h6>
      <v-row>
        <v-col v-for="post in suggestedPosts" :key="post.id" cols="12" sm="6" lg="4">
          <post-card-medium :post="post" />
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

import PostCardMedium from './card/PostCardMedium.vue'
import profile from '~/mixins/profile.js'
export default {
  components: { PostCardMedium },
  mixins: [profile],
  props: {
    author: {
      type: String,
      required: true
    },
    signature: {
      type: String,
      required: true
    },
    avatar: {
      type: String,
      required: false,
      default: () => ''
    },
    postId: {
      type: Number,
      required: true
    }

  },
  data () {
    return {
      follow: false
    }
  },
  computed: {
    ...mapGetters({
      posts: 'blog/POSTS'
    }),
    authorPosts () {
      return this.posts.filter(post => post.author === this.author && post.id !== this.postId)
    },
    suggestedPosts () {
      const currentPost = this.posts.find(post => post.id === this.postId)
      const suggestedPosts = this.posts.filter(post => post.tags.some(tag => currentPost.tags.includes(tag)))
      const index = suggestedPosts.findIndex(post => post.id === this.id)
      suggestedPosts.splice(index, 1)
      return suggestedPosts
    }
  }

}
</script>

<style lang="scss" scoped>
@import '~vuetify/src/styles/styles.sass';

.signature{
    width: 50%;
}

@media #{map-get($display-breakpoints, 'md-and-down')} {
    .signature {
      width: 70%;
    }
}

@media #{map-get($display-breakpoints, 'xs-only')} {
    .signature {
      width: 100%;
    }
}
</style>
