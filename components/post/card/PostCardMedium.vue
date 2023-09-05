<template>
  <div class="post-card-medium mb-12">
    <div class="post-image">
      <n-link :to="`/post/${post.slug}`">
        <v-img
          :src="`/posts/${post.img}.jpg`"
          :lazy-src="`/posts/${post.img}_thumbnail.png`"
          aspect-ratio="2"
        />
      </n-link>
    </div>
    <div class="post-author mt-6">
      <v-avatar size="25" :color="dark ? 'white' : 'black'">
        <v-img v-if="post.avatar" :src="`/${post.avatar}.jpg`" />

        <span
          v-else
          class="user-initials text-uppercase"
          :class="[dark ? 'black--text' : 'white--text']"
        >{{ getInitials(post.author) }}</span>
      </v-avatar>
      <span class="text-caption pl-2" :class="[!dark ? 'black--text' : 'white--text']">{{ post.author }}</span>
    </div>
    <div class="post-content mt-6">
      <n-link :to="`/post/${post.slug}`" tag="div">
        <div class="post-body my-2">
          <div class="post-title font-weight-bold text-h6">
            {{ post.title | truncate(90, '...') }}
          </div>
          <div class="post-description my-2" :class="[!dark ? 'grey--text text--darken-1' : 'grey--text text--lighten-1']">
            {{ post.description | truncate(100, '...') }}
          </div>
        </div>
      </n-link>
    </div>
    <div class="post-stats mt-4">
      <n-link :to="`/post/${post.slug}`" tag="div">
        <div class="text-body-2 d-flex align-center" :class="[!dark ? 'grey--text text--darken-1' : 'grey--text text--lighten-1']">
          <span class="condensed">5 min read</span>
          <div class="dot" />
          <span class="condensed">{{ published }}</span>
        </div>
      </n-link>
    </div>
    <div class="post-actions mt-4">
      <div class="post-actions d-flex align-center justify-space-between">
        <div>
          <post-like :like-count="post.likes" :small="true" class="mr-2" />
          <post-comment :comment-count="post.comments" :small="true" />
        </div>
        <div>
          <post-bookmark :small="true" :top="false" :bottom="true" :post="post" />
          <v-btn icon plain small>
            <v-icon small>
              mdi-dots-horizontal
            </v-icon>
          </v-btn>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import moment from 'moment'
import profile from '~/mixins/profile.js'

import PostLike from '~/components/post/button/PostLike.vue'
import PostComment from '~/components/post/button/PostComment.vue'
import PostBookmark from '~/components/post/button/PostBookmark.vue'

export default {
  components: { PostLike, PostComment, PostBookmark },
  mixins: [profile],
  props: {
    post: {
      type: Object,
      required: true
    }
  },
  computed: {
    dark () {
      return this.$vuetify.theme.dark
    },
    published () {
      return moment(this.post.created_at).format('DD MMM')
    }
  }
}
</script>

<style lang="scss" scoped>
.user-initials{
  font-size: 0.6rem;
}

.post-body{
  min-height: 100px;
}
.post-title{
  line-height: 24px;
}

.post-content, .post-stats{
  cursor: pointer;
}

.post-description{
  line-height: 20px;
  max-height: 40px;
}

.dot{
    width: 3px;
    height: 3px;
    border-radius: 50%;
    background-color: grey;
    margin: 0 6px;
}

.condensed{
  letter-spacing: -0.02rem;
}
</style>
