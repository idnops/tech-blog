<template>
  <v-app :dark="dark">
    <TheNavBar />
    <v-main>
      <Nuxt />
      <create-bookmark-list />
    </v-main>
    <v-footer
      :absolute="!fixed"
      app
    >
      <span>&copy; {{ new Date().getFullYear() }}</span>
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
      dark: false,
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Inspire',
          to: '/inspire'
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js'
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
