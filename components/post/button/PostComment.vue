<template>
  <v-tooltip top open-delay="300" color="black">
    <template #activator="{ on, attrs }">
      <v-btn
        class="mr-2"
        plain
        :ripple="false"
        v-bind="attrs"
        v-on="on"
        @click.prevent
      >
        <v-icon :small="small">
          mdi-comment-outline
        </v-icon>
        <span v-if="commentCount > 0" class="comments">{{ commentCount }}</span>
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

.comments{
    letter-spacing: -0.05em;
}
</style>
