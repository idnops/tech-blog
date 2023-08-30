<template>
  <v-menu
    v-model="menu"
    absolute
    min-width="240"
    left
    :top="bottom"
    nudge-right="30"
    :nudge-bottom="top ? '30' : ''"
    :nudge-top="bottom ? '30' : ''"
    :close-on-content-click="false"
  >
    <template #activator="{on : onMenu}">
      <v-tooltip :top="top" :bottom="bottom" open-delay="300" color="black">
        <template #activator="{ on: onTooltip }">
          <v-btn
            icon
            plain
            :ripple="false"
            v-on="{...onMenu, ...onTooltip}"
          >
            <v-icon v-if="selectedLists.length">
              mdi-bookmark
            </v-icon>
            <v-icon v-else>
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
              <v-checkbox color="grey" :input-value="active" />
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
      <v-list-item @click="handleClick">
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
    top: {
      type: Boolean,
      required: true
    },
    bottom: {
      type: Boolean,
      required: true
    },
    open: {
      type: Boolean,
      required: true
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
      lists: 'list/LISTS',
      post: 'blog/CURRENT_POST'
    })
  },
  watch: {
    open () {
      if (this.open) {
        this.menu = true
      }
    },
    lists: {
      handler: function (val, oldVal) {
        this.selectedLists = this.lists.filter(list => list.posts.includes(this.post.id))
      },
      deep: true
    }
  },
  methods: {
    handleClick () {
      this.menu = false
      this.$emit('clicked')
    },
    async handleChange () {
      await this.$store.dispatch('list/UPDATE_POST_LIST', {
        lists: this.selectedLists,
        postId: this.post.id
      })
    }
  }

}
</script>

<style lang="scss" scoped>
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
