<template>
  <v-tooltip top open-delay="300" color="black">
    <template #activator="{ on, attrs }">
      <v-btn
        class="mr-2"
        plain
        :ripple="false"
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

.v-btn:not(.v-btn--round).v-size--default{
  height: auto;
  min-width: auto;
  padding: 0;
}

.v-btn__content{
  justify-content: flex-start;
}
.theme--light.v-btn.v-btn--icon{
  color: rgba(0, 0, 0, 0.6);

  &:hover{
    color: rgba(0, 0, 0, 1);
  }
}

.likes{
    letter-spacing: -0.05em;
}
</style>
