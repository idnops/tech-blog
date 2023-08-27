<template>
  <v-btn icon small @click="toggleTheme">
    <v-scroll-y-reverse-transition mode="out-in" :duration="50">
      <v-icon v-if="dark" key="dark" small color="yellow darken-2">
        mdi-white-balance-sunny
      </v-icon>
      <v-icon v-else key="light" small>
        mdi-weather-night
      </v-icon>
    </v-scroll-y-reverse-transition>
  </v-btn>
</template>

<script>
export default {
  computed: {
    dark () {
      return this.$vuetify.theme.dark
    }
  },
  methods: {
    toggleTheme () {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark
      this.dark = !this.dark
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
