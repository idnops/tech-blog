<template>
  <div class="user-card-tiny  my-4">
    <div class="user-details d-flex align-center">
      <div class="post-author d-flex mr-2">
        <v-avatar size="30" :color="dark ? 'white' : 'black'">
          <v-img v-if="post.author.photoUrl" :src="post.author.photoUrl" />

          <span
            v-else
            class="text-caption text-uppercase"
            :class="[dark ? 'black--text' : 'white--text']"
          >{{ getInitials(post.author.name) }}</span>
        </v-avatar>
        <div class="d-flex flex-column ml-4">
          <span class="text-body-1 font-weight-bold" :class="[!dark ? 'black--text' : 'white--text']">{{ post.author.name }}</span>
          <span v-if="post.author.signature" class="text-caption">{{ post.author.signature | truncate(55, '...') }}</span>
        </div>
      </div>
      <div>
        <v-btn small rounded outlined class="text-capitalize text-caption">
          follow
        </v-btn>
      </div>
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

</style>
