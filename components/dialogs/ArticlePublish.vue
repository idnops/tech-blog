<template>
  <v-card class="pa-12">
    <div class="actions d-flex justify-end my-12">
      <v-btn icon @click="$store.dispatch('dialog/HIDE_DIALOG')">
        <v-icon>mdi-close</v-icon>
      </v-btn>
    </div>
    <div>
      <v-row>
        <v-col cols="6">
          <div class="preview">
            <div class="my-2">
              <span class="text-body-1 text-capitalize font-weight-bold">
                story preview
              </span>
            </div>
            <div>
              <v-sheet v-if="!previewImage" height="240" color="grey lighten-4" class="d-flex align-center justify-center pa-12 text-center text-caption grey--text text--darken-2">
                Include a high-quality image in your story to make it more inviting to readers.
              </v-sheet>
              <v-img v-else :src="previewImage.data.file.url" max-height="240" />
            </div>
            <div>
              <v-text-field v-model="title" placeholder="Preview title" hide-details="auto" />
              <v-text-field v-model="subtitle" placeholder="Preview subtitle" hide-details="auto" />
            </div>
            <div class="mt-4 note">
              <span class="text-caption">
                <b>Note:</b> Changes here will affect how your story appears in public places like Medium’s homepage and in subscribers’ inboxes — not the contents of the story itself.
              </span>
            </div>
          </div>
        </v-col>
        <v-col cols="6">
          <div class="publish">
            <div>
              <span class="text-body-1 text-capitalize">
                publishing to: <b>aydin yagubov</b>
              </span>
            </div>
            <div class="my-2">
              <span class="text-caption">
                Add or change topics (up to 5) so readers know what your story is about
              </span>
              <v-combobox
                v-model="tags"
                :items="items"
                :search-input.sync="search"
                hide-selected
                multiple
                small-chips
                outlined
                hide-details="auto"
                max-width="500"
              >
                <template #no-data>
                  <div class="no-data-content pa-2 text-body-2">
                    <span>
                      No results matching "<strong>{{ search }}</strong>". Press <kbd>enter</kbd> to create a new one
                    </span>
                  </div>
                </template>
                <template #selection="{ attrs, item, parent, selected }">
                  <v-chip
                    v-bind="attrs"
                    :input-value="selected"
                    label
                    small
                  >
                    <span class="pr-2">
                      {{ item }}
                    </span>
                    <v-icon
                      small
                      @click="parent.selectItem(item)"
                    >
                      $delete
                    </v-icon>
                  </v-chip>
                </template>
              </v-combobox>
            </div>
            <div>
              <span class="text-caption">
                Learn more about what happens to your post when you publish.
              </span>
            </div>
            <div class="my-8">
              <v-btn
                dark
                rounded
                color="green darken-1"
                class="text-body-2 text-capitalize"
                elevation="0"
                @click="handlePublish"
              >
                publish now
              </v-btn>
              <v-btn plain class="text-caption text-capitalize">
                schedule for later
              </v-btn>
            </div>
          </div>
        </v-col>
      </v-row>
    </div>
  </v-card>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data () {
    return {
      tags: [],
      items: ['software', 'development'],
      search: null,
      title: '',
      subtitle: ''
    }
  },
  computed: {
    ...mapGetters({
      draft: 'post/DRAFT'
    }),
    previewImage () {
      return this.draft.blocks.find(o => o.type === 'image')
    }
  },
  methods: {
    async handlePublish () {
    //   this.tags.forEach(async (tag) => {
    //     await this.$store.dispatch('tag/CREATE_TAG', { tag })
    //   })
      await this.$store.dispatch('post/PUBLISH', {
        body: this.draft,
        tags: this.tags,
        title: this.title,
        subtitle: this.subtitle
      })
      this.$store.dispatch('dialog/HIDE_DIALOG')
      this.$router.push('/')
    }
  }
}
</script>

<style lang="scss" scoped>
.preview, .publish{
    max-width: 440px;
}
.note{
    line-height: 0.4rem;
}

.no-data-content{
    max-width: 440px;
}
</style>
