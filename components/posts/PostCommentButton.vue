<template>
  <v-tooltip top open-delay="300" color="black">
    <template #activator="{ on, attrs }">
      <v-btn
        icon
        plain
        :ripple="false"
        class="mr-4"
        v-bind="attrs"
        v-on="on"
      >
        <v-icon :small="small">
          mdi-comment-outline
        </v-icon>
        <span class="comments">{{ commentCount }}</span>
      </v-btn>
    </template>
    <span>Comment</span>
  </v-tooltip>
</template>

<script>
export default {
  props: {
    commentCount: {
      type: Number,
      required: false,
      default: () => 0
    },
    small: {
      type: Boolean,
      required: false,
      default: () => false
    }
  },
  data () {
    return {
      likes: 0,
      like: false
    }
  }

}
</script>

<style lang="scss" scoped>
.comments{
    letter-spacing: -0.05em;
}
</style>
