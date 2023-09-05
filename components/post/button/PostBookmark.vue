<template>
  <v-menu
    v-model="menu"
    absolute
    min-width="240"
    left
    :top="!top"
    nudge-right="30"
    :nudge-bottom="top ? '30' : ''"
    :nudge-top="!top ? '30' : ''"
    :close-on-content-click="false"
  >
    <template #activator="{on : onMenu}">
      <v-tooltip :top="top" :bottom="!top" open-delay="300" color="black">
        <template #activator="{ on: onTooltip }">
          <v-btn
            icon
            plain
            :ripple="false"
            v-on="{...onMenu, ...onTooltip}"
            @click.prevent="addToBookmark"
          >
            <v-icon v-if="isPostBookmarked" :small="small">
              mdi-bookmark
            </v-icon>
            <v-icon v-else :small="small">
              mdi-bookmark-outline
            </v-icon>
          </v-btn>
        </template>
        <span>Save</span>
      </v-tooltip>
    </template>

    <v-list class="pt-8">
      <v-list-item-group
        v-model="selectedLists"
        multiple
        @change="handleChange"
      >
        <v-list-item v-for="list in lists" :key="list.name" :value="list">
          <template #default="{ active }">
            <v-list-item-action>
              <v-checkbox color="black" :input-value="active" />
            </v-list-item-action>

            <v-list-item-content>
              <v-list-item-title class="text-body-2 text-capitalize font-weight-regular">
                {{ list.name }}
              </v-list-item-title>
            </v-list-item-content>
          </template>
        </v-list-item>
        <v-divider />
      </v-list-item-group>
      <v-list-item @click="openListDialog">
        <v-list-item-content>
          <v-list-item-title class="text-body-2 text-capitalize font-weight-regular">
            create new list
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  props: {
    post: {
      type: Object,
      required: true
    },
    top: {
      type: Boolean,
      required: false,
      default: () => true
    },
    small: {
      type: Boolean,
      required: false,
      default: () => false
    }
  },
  data () {
    return {
      menu: false,
      selectedLists: []
    }
  },
  computed: {
    ...mapGetters({
      lists: 'list/LISTS'
    }),
    isPostBookmarked () {
      if (this.post) {
        return this.lists.filter(list => list.posts.includes(this.post.id)).length > 0
      } else {
        return false
      }
    }
  },
  watch: {
    lists: {
      handler: function (val, oldVal) {
        this.selectedLists = this.lists.filter(list => list.posts.includes(this.post.id))
      },
      deep: true
    }
  },
  methods: {
    async handleChange () {
      await this.$store.dispatch('list/UPDATE_POST_LIST', {
        lists: this.selectedLists,
        postId: this.post.id
      })
    },
    async addToBookmark () {
      if (!this.isPostBookmarked) {
        await this.$store.dispatch('list/ADD_POST_TO_LIST', this.post.id)
      }
    },
    async openListDialog () {
      this.menu = false
      await this.$store.dispatch('list/OPEN_LIST_DIALOG', this.post.id)
    }
  }

}
</script>

<style lang="scss" scoped>
.theme--light.v-btn.v-btn--icon{
  color: rgba(0, 0, 0, 0.6);

  &:hover{
    color: rgba(0, 0, 0, 1);
  }
}
.v-menu__content{
    border-radius: 8px;
}
.v-list-item--active::before{
    opacity: 0;
}
.v-list-item--active:hover::before{
    opacity: 0.04;
}
</style>
