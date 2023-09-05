<template>
  <v-toolbar elevation="0" color="transparent" height="56">
    <nuxt-link to="/">
      <the-logo />
    </nuxt-link>
    <v-spacer />
    <div v-if="user" class="d-flex align-center">
      <v-toolbar-items>
        <navigation-link class="d-none d-sm-block">
          <v-icon class="mr-1">
            mdi-pencil-box
          </v-icon>
          <span>write</span>
        </navigation-link>
      </v-toolbar-items>
      <the-profile />
    </div>
    <div v-else>
      <v-btn

        :dark="!dark"
        :light="dark"
        elevation="0"
        :color="signInButtonColor"
        class="font-weight-regular text-capitalize mx-1"
        to="/auth/signin"
      >
        sign in
      </v-btn>
    </div>

    <the-theme-toggler class="ml-1 d-none d-sm-block" />
  </v-toolbar>
</template>

<script>
import { mapGetters } from 'vuex'
import NavigationLink from './NavigationLink.vue'
import TheLogo from './TheLogo.vue'
import TheProfile from './TheProfile.vue'
import TheThemeToggler from './TheThemeToggler.vue'

export default {
  components: {
    TheLogo,
    NavigationLink,
    TheThemeToggler,
    TheProfile
  },
  computed: {
    dark () {
      return this.$vuetify.theme.dark
    },
    signInButtonColor () {
      return this.dark ? '#ffffff' : '#000000'
    },
    ...mapGetters({
      user: 'auth/USER'
    })
  }
}
</script>

<style lang="scss" scoped>

</style>
