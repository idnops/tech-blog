<template>
  <v-app :dark="dark">
    <v-container>
      <TheNavBar />
      <v-main>
        <v-container>
          <Nuxt />
        </v-container>
      </v-main>
      <v-footer
        :absolute="!fixed"
        app
      >
        <span>&copy; {{ new Date().getFullYear() }}</span>
      </v-footer>
    </v-container>
  </v-app>
</template>

<script>
import TheNavBar from '~/components/navigation/TheNavBar.vue'
export default {
  name: 'DefaultLayout',
  components: { TheNavBar },
  data () {
    return {
      dark: true,
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
