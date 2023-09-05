<template>
  <v-app :dark="dark">
    <the-nav-bar />
    <v-divider />
    <v-main>
      <Nuxt />
    </v-main>
    <v-divider />
    <the-footer />
  </v-app>
</template>

<script>
import TheNavBar from '~/components/navigation/TheNavBar.vue'
import TheFooter from '~/components/navigation/TheFooter.vue'

export default {
  name: 'DefaultLayout',
  components: { TheNavBar, TheFooter },
  data () {
    return {
      dark: false

    }
  }
}
</script>

<style lang="scss" scoped>

</style>
