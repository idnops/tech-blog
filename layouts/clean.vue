<template>
  <v-app :dark="dark">
    <the-nav-bar />
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

export default {
  name: 'DefaultLayout',
  components: { TheNavBar, TheFooter, CreateBookmarkList },
  data () {
    return {
      dark: false

    }
  }
}
</script>

<style lang="scss" scoped>

</style>
