<template>
  <v-app-bar elevation="0" color="transparent" height="56" app absolute>
    <nuxt-link to="/">
      <the-logo />
    </nuxt-link>
    <v-spacer />
    <v-btn
      rounded
      elevation="0"
      small
      outlined
      class="font-weight-regular text-capitalize mx-1 mr-4"
      nuxt
      to="/new"
    >
      write
    </v-btn>
    <div v-if="user" class="d-flex align-center">
      <the-profile />
    </div>
    <div v-else>
      <v-btn
        rounded
        small
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
  </v-app-bar>
</template>

<script>
import { mapGetters } from 'vuex'
import TheLogo from './TheLogo.vue'
import TheProfile from './TheProfile.vue'
import TheThemeToggler from './TheThemeToggler.vue'

export default {
  components: {
    TheLogo,
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
.theme--light.v-app-bar.v-toolbar{

  &::before{
    content: '';
    width: 100%;
    height: 1px;
    background-color: rgba(0,0,0, 0.05);
    position: absolute;
    left: 0;
    bottom: 0;

  }
}
</style>
