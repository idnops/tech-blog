<template>
  <div class="post-card-saved-tiny my-6">
    <div class="post-details d-flex align-center">
      <div class="post-author">
        <v-avatar size="25" color="black" rounded>
          <v-img v-if="post.avatar" :src="`/${post.avatar}.jpg`" />
          <span
            v-else
            class="user-initials text-uppercase white--text"
          >{{ getInitials(post.author) }}</span>
        </v-avatar>
        <span class="text-caption black--text pl-2">{{ post.author }}</span>
      </div>
    </div>
    <div class="post-content">
      <nuxt-link :to="`/post/${post.slug}`" tag="div">
        <div class="post-body my-2">
          <div class="post-title font-weight-bold text-body-2">
            {{ post.title | truncate(90, '...') }}
          </div>
        </div>
      </nuxt-link>
    </div>
    <div class="post-published text-caption grey--text text--darken-1 d-flex align-center">
      <span>{{ published }}</span>
      <div class="dot" />
      <span>5 min read</span>
    </div>
  </div>
</template>

<script>
import moment from 'moment'
import profile from '~/mixins/profile'

export default {
  mixins: [profile],
  props: {
    post: {
      type: Object,
      required: true
    }
  },
  computed: {
    published () {
      return moment(this.post.created_at).format('DD MMM')
    }
  }
}
</script>

<style lang="scss" scoped>
.dot{
    width: 3px;
    height: 3px;
    border-radius: 50%;
    background-color: grey;
    margin: 0 6px;
}

.user-initials{
    font-size: 0.6rem;
}

</style>
