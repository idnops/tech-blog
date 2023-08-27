<template>
  <v-toolbar elevation="0" color="transparent" height="64">
    <nuxt-link to="/">
      <the-logo />
    </nuxt-link>

    <v-toolbar-items>
      <navigation-link to="/?tag=news">
        news
      </navigation-link>
      <navigation-link to="/?tag=tech">
        technology
      </navigation-link>
      <navigation-link to="/?tag=politics">
        politics
      </navigation-link>
    </v-toolbar-items>
    <v-spacer />
    <div v-if="user" class="d-flex align-center">
      <v-toolbar-items>
        <navigation-link>
          <v-icon class="mr-1">
            mdi-pencil-box
          </v-icon>
          <span>write</span>
        </navigation-link>
      </v-toolbar-items>
      <v-btn icon small class="mx-1">
        <v-icon small>
          mdi-bell-outline
        </v-icon>
      </v-btn>
      <v-avatar color="black" size="32">
        <span class="white--text text-caption">CJ</span>
      </v-avatar>
    </div>
    <div v-else>
      <v-btn

        :dark="!dark"
        :light="dark"
        elevation="0"
        :color="signInButtonColor"
        class="font-weight-regular text-capitalize mx-1"
        to="/signin"
      >
        sign in
      </v-btn>
    </div>
    <v-btn icon small class="mx-1">
      <v-icon small>
        mdi-magnify
      </v-icon>
    </v-btn>

    <the-theme-toggler class="ml-1" />
  </v-toolbar>
</template>

<script>
import NavigationLink from './NavigationLink.vue'
import TheLogo from './TheLogo.vue'
import TheThemeToggler from './TheThemeToggler.vue'
export default {
  components: {
    TheLogo,
    NavigationLink,
    TheThemeToggler
  },
  data () {
    return {
      user: null
    }
  },
  computed: {
    dark () {
      return this.$vuetify.theme.dark
    },
    signInButtonColor () {
      return this.dark ? '#ffffff' : '#000000'
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
