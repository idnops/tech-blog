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
            class="mr-2"
            plain
            :ripple="false"
            v-on="{...onMenu, ...onTooltip}"
          >
            <v-icon :small="small">
              mdi-dots-horizontal
            </v-icon>
          </v-btn>
        </template>
        <span>More</span>
      </v-tooltip>
    </template>

    <v-list dense>
      <v-list-item-group>
        <v-list-item @click="openReportDialog">
          <v-list-item-content>
            <v-list-item-title class="text-body-2 text-capitalize font-weight-regular">
              report story
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item nuxt to="/me/manage">
          <v-list-item-content>
            <v-list-item-title class="text-body-2 text-capitalize font-weight-regular">
              block author
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-menu>
</template>

<script>

export default {
  props: {
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
      menu: false
    }
  },
  methods: {
    openReportDialog () {
      this.menu = false
      this.$store.dispatch('dialog/SHOW_DIALOG', {
        content: 'report-story'
      })
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
