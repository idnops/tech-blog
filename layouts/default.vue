<template>
  <v-app :dark="dark">
    <TheNavBar />
    <v-main>
      <Nuxt />
      <create-bookmark-list />
    </v-main>
    <v-divider />

    <v-footer
      :absolute="true"
      app
      class="pa-3"
    >
      <v-container>
        <div class="d-flex align-center justify-space-between">
          <span>&copy; {{ new Date().getFullYear() }}</span>
          <nuxt-link to="/">
            <the-logo-static />
          </nuxt-link>
        </div>
      </v-container>
    </v-footer>
  </v-app>
</template>

<script>
import TheNavBar from '~/components/navigation/TheNavBar.vue'
import CreateBookmarkList from '~/components/post/CreateBookmarkList.vue'
import TheLogoStatic from '~/components/navigation/TheLogoStatic.vue'
export default {
  name: 'DefaultLayout',
  components: { TheNavBar, CreateBookmarkList, TheLogoStatic },
  data () {
    return {
      dark: false
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
