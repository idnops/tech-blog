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
        @click.prevent="handleLike"
      >
        <v-icon v-if="like" :small="small" color="red">
          mdi-heart
        </v-icon>
        <v-icon v-else :small="small">
          mdi-heart-outline
        </v-icon>
        <span class="likes">{{ likes }}</span>
      </v-btn>
    </template>
    <span>Like</span>
  </v-tooltip>
</template>

<script>
export default {
  props: {
    likeCount: {
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
  },
  mounted () {
    this.likes = this.likeCount
  },
  methods: {
    handleLike () {
      if (this.like) {
        this.like = false
        this.likes--
      } else {
        this.like = true
        this.likes++
      }
    }
  }

}
</script>

<style lang="scss" scoped>
.likes{
    letter-spacing: -0.05em;
}
</style>
