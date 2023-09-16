<template>
  <v-dialog
    v-model="dialog"
    :persistent="persistent"
    :max-width="maxWidth"
  >
    <component :is="content" />
  </v-dialog>
</template>

<script>
import BookmarkList from './BookmarkList.vue'
import ReportStory from './ReportStory.vue'
export default {
  components: { BookmarkList, ReportStory },
  data () {
    return {
      dialog: false
    }
  },
  computed: {
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

<style lang="scss" scoped>

</style>
