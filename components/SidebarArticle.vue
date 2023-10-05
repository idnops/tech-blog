<template>
  <div class="sidebar">
    <div class="stats">
      <h2 class="text-body-1 font-weight-bold text-capitalize black--text mb-6">
        article stats
      </h2>
      <div class="d-flex align-start mb-8">
        <v-icon large color="green" class="mr-6">
          mdi-progress-pencil
        </v-icon>
        <div class="d-flex flex-column">
          <span class="text-body-2 font-weight-bold">{{ wordCount }} words</span>
          <span class="text-caption grey--text">Article's word count</span>
        </div>
      </div>
      <div class="d-flex align-start mb-8">
        <v-icon large color="green" class="mr-6">
          mdi-timer-edit-outline
        </v-icon>
        <div class="d-flex flex-column">
          <span class="text-body-2 font-weight-bold">{{ readingTime }} minutes</span>
          <span class="text-caption grey--text">Reading time based on word count</span>
        </div>
      </div>
    </div>
    <v-divider class="my-6" />
    <div class="status">
      <h2 class="text-body-1 font-weight-bold text-capitalize">
        article status
      </h2>
      <div>
        <span class="text-body-2">
          Draft in Aydin Yagubov
        </span>
        <span v-if="draftStatus" class="text-body-2 text-capitalize grey--text ml-3">{{ draftStatus }}</span>
        <div class="d-flex flex-column justify-center mt-6">
          <v-btn
            rounded
            dark
            block
            color="green darken-1"
            class="text-body-2 text-capitalize mt-2"
            elevation="0"
            @click="handlePublish"
          >
            publish
          </v-btn>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters({
      draft: 'post/DRAFT',
      draftStatus: 'post/DRAFT_STATUS',
      wordCount: 'post/WORD_COUNT',
      readingTime: 'post/READING_TIME'
    }),
    dark () {
      return this.$vuetify.theme.dark
    }
  },
  methods: {
    handlePublish () {
      this.$store.dispatch('dialog/SHOW_DIALOG', {
        content: 'article-publish',
        elevated: true,
        persistent: true,
        maxWidth: 1200
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.v-chip.v-size--default{
  height: 36px;
  padding: 18px;
  border-radius: 24px;
  margin: 5px 5px 5px 0;
  text-transform: capitalize;
  font-size: 0.75rem;
}
</style>
