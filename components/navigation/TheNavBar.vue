<template>
  <v-toolbar elevation="0" color="transparent">
    <NuxtLink to="/">
      <TheLogo />
    </NuxtLink>
  </v-toolbar>
</template>

<script>
import TheLogo from './TheLogo.vue'
export default {
  components: {
    TheLogo
  }
}
</script>

<style lang="scss" scoped>

</style>
