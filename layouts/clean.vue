<template>
  <v-app :dark="dark">
    <the-nav-bar />
    <google-onetap />
    <v-divider />
    <v-main>
      <Nuxt />
      <create-bookmark-list />
    </v-main>
    <v-divider />
    <the-footer />
  </v-app>
</template>

<script>
import TheNavBar from '~/components/navigation/TheNavBar.vue'
import TheFooter from '~/components/navigation/TheFooter.vue'
import CreateBookmarkList from '~/components/post/CreateBookmarkList.vue'
import GoogleOnetap from '~/components/GoogleOnetap.vue'

export default {
  name: 'DefaultLayout',
  components: { TheNavBar, TheFooter, CreateBookmarkList, GoogleOnetap },
  data () {
    return {
      dark: false

    }
  }
}
</script>

<style lang="scss" scoped>

</style>
