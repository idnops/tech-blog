<template>
  <v-app :dark="dark">
    <the-nav-bar />
    <google-onetap />
    <v-divider />
    <v-main>
      <Nuxt />
      <dialog-main />
    </v-main>
    <v-divider />
    <the-footer />
  </v-app>
</template>

<script>
import TheNavBar from '~/components/navigation/TheNavBar.vue'
import TheFooter from '~/components/navigation/TheFooter.vue'
import GoogleOnetap from '~/components/GoogleOnetap.vue'
import DialogMain from '~/components/dialogs/DialogMain.vue'

export default {
  name: 'DefaultLayout',
  components: { TheNavBar, TheFooter, GoogleOnetap, DialogMain },
  data () {
    return {
      dark: false

    }
  },
  mounted () {
    this.$store.dispatch('auth/RESTORE_USER')
  }
}
</script>

<style lang="scss" scoped>

</style>
