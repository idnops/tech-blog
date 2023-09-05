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
          <span class="text-body-2 font-weight-bold">259 words</span>
          <span class="text-caption grey--text">Article's word count</span>
        </div>
      </div>
      <div class="d-flex align-start mb-8">
        <v-icon large color="green" class="mr-6">
          mdi-timer-edit-outline
        </v-icon>
        <div class="d-flex flex-column">
          <span class="text-body-2 font-weight-bold">4 minutes</span>
          <span class="text-caption grey--text">Reading time based on word count</span>
        </div>
      </div>
    </div>
    <v-divider class="my-6" />
    <div class="tags">
      <h2 class="text-body-1 font-weight-bold text-capitalize black--text mb-6">
        add a topic
      </h2>
      <div>
        <v-text-field
          outlined
          dense
          placeholder="Search topic"
          persistent-hint="Add or change topics (up to 5) so readers know what your story is about"
          class="text-body-2"
          color="grey lighten-2"
        />
      </div>

      <v-chip-group multiple column>
        <v-chip
          v-for="tag in tags"
          :key="tag.name"
          filter
          filter-icon="mdi-circle-small"
          pill
          :color="!dark ? 'grey lighten-3' : 'grey darken-2'"
        >
          {{ tag.name }}
        </v-chip>
      </v-chip-group>
    </div>
    <v-divider class="my-6" />

    <div class="status">
      <h2 class="text-body-1 font-weight-bold text-capitalize">
        article status
      </h2>
      <div>
        <span class="text-body-2">
          Draft if Aydin Yagubov
        </span>
        <span class="text-body-2 grey--text ml-3">Saved</span>
        <div class="d-flex flex-column justify-center mt-6">
          <v-btn
            rounded
            dark
            block
            color="green darken-1"
            class="text-body-2 text-capitalize mt-2"
            elevation="0"
          >
            publish now
          </v-btn>
          <v-btn plain class="text-caption text-capitalize">
            schedule for later
          </v-btn>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      tags: [
        {
          name: 'Software development',
          url: 'software-development'
        },
        {
          name: 'Web 3',
          url: 'web-3'
        },
        {
          name: 'Data science',
          url: 'data-science'
        },
        {
          name: 'React',
          url: 'react'
        },
        {
          name: 'UX design',
          url: 'ux-design'
        },
        {
          name: 'Flutter',
          url: 'flutter'
        },
        {
          name: 'Phyton',
          url: 'phyton'
        }
      ]
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
