<template>
  <v-card flat>
    <v-img :src="`/posts/${post.img}`" height="250" />
    <div class="author mt-6">
      <div class="d-flex justify-space-between">
        <div>
          <v-avatar size="30" :color="dark ? 'white' : 'black'">
            <v-img v-if="post.avatar" :src="post.avatar" />
            <span
              v-else
              class="text-caption text-uppercase"
              :class="[dark ? 'black--text' : 'white--text']"
            >{{ getInitials(post.author) }}</span>
          </v-avatar>
          <span class="text-caption pl-2">{{ post.author }}</span>
        </div>
        <span class="text-caption">{{ published }}</span>
      </div>
    </div>
    <div class="post-content">
      <v-card-title class="pl-0 post-title">
        {{ post.title | truncate(50, '...') }}
      </v-card-title>
      <v-card-text class="pa-0">
        {{ post.content | truncate(200, '...') }}
      </v-card-text>
    </div>
    <div class="mt-4" />
    <v-card-actions class="px-0 d-flex justify-space-between">
      <div>
        <post-like-button :small="true" :like-count="26" />
        <post-comment-button :small="true" :comment-count="12" />
      </div>
      <div>
        <post-bookmark :small="true" :top="false" :bottom="true" :post="post" />
      </div>
    </v-card-actions>
  </v-card>
</template>

<script>
import moment from 'moment'
import PostLikeButton from './PostLikeButton.vue'
import PostCommentButton from './PostCommentButton.vue'
import PostBookmark from './PostBookmark.vue'
import profile from '~/mixins/profile.js'
export default {
  components: { PostLikeButton, PostCommentButton, PostBookmark },
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
.post-title{
    width: 70%;
    word-break: normal;
}
.post-content{
    padding: 0;
    height: 180px;
}
</style>
