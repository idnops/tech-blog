<template>
  <div class="post-buttons d-flex align-center justify-space-between py-2">
    <div class="post-stats">
      <post-like-button :like-count="345" />
      <post-comment-button :comment-count="28" />
    </div>
    <div class="post-actions">
      <post-bookmark
        :top="top"
        :bottom="bottom"
        :post="post"
      />
      <post-share
        :top="top"
        :bottom="bottom"
      />
    </div>
  </div>
</template>

<script>
import PostBookmark from './PostBookmark.vue'
import PostCommentButton from './PostCommentButton.vue'
import PostLikeButton from './PostLikeButton.vue'
import PostShare from './PostShare.vue'
export default {
  components: { PostBookmark, PostShare, PostLikeButton, PostCommentButton },
  props: {
    post: {
      type: Object,
      required: true
    },
    position: {
      type: String,
      required: false,
      default: () => 'top'
    }
  },
  data () {
    return {
      openDialog: false,
      openMenu: false,
      like: false,
      likeCount: 12
    }
  },
  computed: {
    top () {
      return this.position === 'top'
    },
    bottom () {
      return this.position === 'bottom'
    }
  }

}
</script>

<style lang="scss" scoped>

</style>
