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
  >
    <template #activator="{on : onMenu}">
      <v-tooltip v-model="tooltip" :top="top" :bottom="!top" open-delay="300" color="black">
        <template #activator="{ on: onTooltip }">
          <v-btn
            icon
            plain
            :ripple="false"
            v-on="{...onMenu, ...onTooltip}"
            @mouseenter="tooltipText = 'share'"
          >
            <v-icon>
              mdi-export-variant
            </v-icon>
          </v-btn>
        </template>
        <span class="text-capitalize">{{ tooltipText }}</span>
      </v-tooltip>
    </template>

    <v-list>
      <v-list-item-group>
        <v-list-item @click="copyUrl">
          <v-list-item-icon class="mr-2">
            <v-icon small>
              mdi-link-variant
            </v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title class="text-body-2 text-capitalize font-weight-regular">
              copy link
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-divider />
        <v-list-item>
          <v-list-item-icon class="mr-2">
            <v-icon small>
              mdi-facebook
            </v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title class="text-body-2 text-capitalize font-weight-regular">
              <ShareNetwork
                tag="div"
                network="facebook"
                :url="url"
                :title="post ? post.title : ''"
                :description="post ? post.description : ''"
                :quote="post ? post.quote : ''"
                :hashtags="post ? post.tags : ''"
                :media="post ? `/posts/${post.img}` : ''"
              >
                share on facebook
              </ShareNetwork>
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-icon class="mr-2">
            <v-icon small>
              mdi-twitter
            </v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title class="text-body-2 text-capitalize font-weight-regular">
              <ShareNetwork
                tag="div"
                network="twitter"
                :url="url"
                :title="post ? post.title : ''"
                :description="post ? post.description : ''"
                :quote="post ? post.quote : ''"
                :hashtags="post ? post.tags : ''"
                :media="post ? `/posts/${post.img}` : ''"
              >
                share on twitter
              </ShareNetwork>
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-icon class="mr-2">
            <v-icon small>
              mdi-linkedin
            </v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title class="text-body-2 text-capitalize font-weight-regular">
              <ShareNetwork
                tag="div"
                network="linkedin"
                :url="url"
                :title="post ? post.title : ''"
                :description="post ? post.description : ''"
                :quote="post ? post.quote : ''"
                :hashtags="post ? post.tags : ''"
                :media="post ? `/posts/${post.img}` : ''"
              >
                share on linkedin
              </ShareNetwork>
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-menu>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  props: {
    top: {
      type: Boolean,
      required: false,
      default: () => true
    }
  },
  data () {
    return {
      menu: false,
      tooltip: false,
      tooltipText: 'share'
    }
  },

  computed: {
    ...mapGetters({
      post: 'blog/CURRENT_POST'
    }),
    url () {
      return 'write.com' + this.$route.fullPath
    }
  },
  methods: {
    async copyUrl () {
      await navigator.clipboard.writeText(window.location.href)
      this.tooltipText = 'copied'
      this.tooltip = true
      setTimeout(() => {
        this.tooltip = false
      }, 1000)
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
