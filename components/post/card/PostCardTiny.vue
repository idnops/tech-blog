<template>
  <div class="post-card-tiny my-4">
    <div class="post-details d-flex align-center">
      <div class="post-author">
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
  </div>
</template>

<script>
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
    dark () {
      return this.$vuetify.theme.dark
    }
  }
}
</script>

<style lang="scss" scoped>
.user-initials{
    font-size: 0.6rem;
}

.post-body{
    cursor: pointer;
}
</style>
