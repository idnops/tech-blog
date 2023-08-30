<template>
  <div class="post-buttons d-flex align-center justify-space-between py-2">
    <div class="post-stats">
      <v-tooltip :top="top" :bottom="bottom" open-delay="300" color="black">
        <template #activator="{ on, attrs }">
          <v-btn
            icon
            plain
            :ripple="false"
            class="mr-4"
            v-bind="attrs"
            v-on="on"
            @click="handleLike"
          >
            <v-icon v-if="like" color="red">
              mdi-heart
            </v-icon>
            <v-icon v-else>
              mdi-heart-outline
            </v-icon>
            <span class="ml-1">{{ likeCount }}</span>
          </v-btn>
        </template>
        <span>Like</span>
      </v-tooltip>

      <v-tooltip :top="top" :bottom="bottom" open-delay="300" color="black">
        <template #activator="{on, attrs}">
          <v-btn
            icon
            plain
            :ripple="false"
            v-bind="attrs"
            v-on="on"
          >
            <v-icon>
              mdi-comment-outline
            </v-icon>
            <span class="ml-1">4</span>
          </v-btn>
        </template>
        <span>Comment</span>
      </v-tooltip>
    </div>
    <div class="post-actions">
      <post-bookmark
        :top="top"
        :bottom="bottom"
        :open="openMenu"
        @clicked="handleDialogOpen"
      />
      <create-bookmark-list :open="openDialog" @closed="handleDialogClose" />
      <post-share
        :top="top"
        :bottom="bottom"
      />
    </div>
  </div>
</template>

<script>
import CreateBookmarkList from './CreateBookmarkList.vue'
import PostBookmark from './PostBookmark.vue'
import PostShare from './PostShare.vue'
export default {
  components: { PostBookmark, CreateBookmarkList, PostShare },
  props: {
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
  },
  methods: {
    handleDialogClose () {
      this.openDialog = false
      this.openMenu = true
    },
    handleDialogOpen () {
      this.openDialog = true
      this.openMenu = false
    },
    handleLike () {
      if (this.like) {
        this.like = false
        this.likeCount--
      } else {
        this.like = true
        this.likeCount++
      }
    }
  }

}
</script>

<style lang="scss" scoped>

</style>
