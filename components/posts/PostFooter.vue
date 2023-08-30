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
    <div class="signature mt-4">
      <span class="text-caption">Leader learning to be better Manager. In all of my articles, you will sense thinking in systems, solution-focused coaching practice, and a sip of stoicism.</span>
    </div>
    <v-divider class="my-8" />
    <h6 class="text-h6">
      More from {{ author }}
    </h6>
  </div>
</template>

<script>
import profile from '~/mixins/profile.js'
export default {
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

  }
}
</script>

<style lang="scss" scoped>
.signature{
    width: 50%;
}
</style>
