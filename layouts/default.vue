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
            <v-img src="/app-logo.svg" alt="" height="30" width="50" />
          </nuxt-link>
        </div>
      </v-container>
    </v-footer>
  </v-app>
</template>

<script>
import TheNavBar from '~/components/navigation/TheNavBar.vue'
import CreateBookmarkList from '~/components/posts/CreateBookmarkList.vue'
export default {
  name: 'DefaultLayout',
  components: { TheNavBar, CreateBookmarkList },
  data () {
    return {
      dark: false
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
