<template>
  <v-menu
    v-model="menu"
    absolute
    min-width="240"
    left
    nudge-right="30"
    nudge-bottom="30"
  >
    <template #activator="{ on, attrs }">
      <v-avatar
        :color="dark ? 'white' : 'black'"
        size="32"
        v-bind="attrs"
        v-on="on"
      >
        <v-img v-if="user.photoUrl" :src="user.photoUrl" />
        <span v-else class="text-caption text-uppercase" :class="[dark ? 'black--text' : 'white--text']">{{ getInitials(user.email) }}</span>
      </v-avatar>
    </template>

    <v-list dense>
      <v-list-item-group class="d-block d-sm-none">
        <v-list-item>
          <v-list-item-icon class="mr-2">
            <v-icon small>
              mdi-pencil-box
            </v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title class="text-body-2 text-capitalize font-weight-regular">
              write
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-divider class="my-2" />
      </v-list-item-group>
      <v-list-item-group>
        <v-list-item nuxt to="/me/profile">
          <v-list-item-icon class="mr-2">
            <v-icon small>
              mdi-account-outline
            </v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title class="text-body-2 text-capitalize font-weight-regular">
              profile
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item nuxt to="/me/stories">
          <v-list-item-icon class="mr-2">
            <v-icon small>
              mdi-note-multiple-outline
            </v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title class="text-body-2 text-capitalize font-weight-regular">
              stories
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item nuxt to="/me/bookmarks">
          <v-list-item-icon class="mr-2">
            <v-icon small>
              mdi-bookmark-multiple-outline
            </v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title class="text-body-2 text-capitalize font-weight-regular">
              bookmarks
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-divider class="my-2" />
        <v-list-item nuxt to="/me/settings">
          <v-list-item-content>
            <v-list-item-title class="text-body-2 text-capitalize font-weight-regular">
              settings
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item nuxt to="/me/manage">
          <v-list-item-content>
            <v-list-item-title class="text-body-2 text-capitalize font-weight-regular">
              manage publications
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-divider class="my-2" />
        <v-list-item @click="signOut">
          <v-list-item-content>
            <v-list-item-title class="text-body-2 text-capitalize font-weight-regular">
              signout
            </v-list-item-title>
            <v-list-item-subtitle class="font-weight-regular">
              {{ user.email }}
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-menu>
</template>

<script>
import { mapGetters } from 'vuex'
import profile from '~/mixins/profile'

export default {
  mixins: [profile],
  data () {
    return {
      menu: false
    }
  },
  computed: {
    dark () {
      return this.$vuetify.theme.dark
    },
    ...mapGetters({
      user: 'auth/USER'
    })
  },
  methods: {
    async signOut () {
      await this.$store.dispatch('auth/SIGN_OUT')
      this.$router.push('/auth/signin?message=signout')
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
