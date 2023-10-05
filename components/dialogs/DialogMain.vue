<template>
  <v-dialog
    v-model="dialog"
    :persistent="persistent"
    :max-width="maxWidth"
    :overlay-color="dark ? 'black' : 'white'"
    :overlay-opacity="elevated ? 1 : 0.9"
    :content-class="elevated ? 'elevated' : ''"
  >
    <component :is="content" />
  </v-dialog>
</template>

<script>
import ArticlePublish from './ArticlePublish.vue'
import BookmarkList from './BookmarkList.vue'
import ReportStory from './ReportStory.vue'
export default {
  components: { ArticlePublish, BookmarkList, ReportStory },
  data () {
    return {
      dialog: false
    }
  },
  computed: {
    dark () {
      return this.$vuetify.theme.dark
    },
    visible () {
      return this.$store.state.dialog.visible
    },
    content () {
      return this.$store.state.dialog.content
    },
    persistent () {
      return this.$store.state.dialog.persistent
    },
    maxWidth () {
      return this.$store.state.dialog.maxWidth
    },
    elevated () {
      return this.$store.state.dialog.elevated
    }
  },
  watch: {
    visible () {
      this.dialog = this.visible
    },
    dialog () {
      if (this.dialog === false) {
        this.$store.dispatch('dialog/HIDE_DIALOG')
      }
    }
  }
}
</script>

<style lang="scss">
.elevated{
  box-shadow: none;
}
</style>
