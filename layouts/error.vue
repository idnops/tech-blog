<template>
  <v-app>
    <!-- <h1 v-if="error.statusCode === 404">
      {{ pageNotFound }}
    </h1>
    <h1 v-else>
      {{ otherError }}
    </h1>
    <NuxtLink to="/">
      Home page
    </NuxtLink> -->
    <div class="d-flex justify-center flex-column flex-grow-1">
      <div class="d-flex justify-center flex-column align-center">
        <the-logo-static />
        <h1 class="error-statuscode grey--text text--lighten-2">
          {{ error.statusCode }}
        </h1>
        <h2 class="text-h5 font-weight-regular grey--text">
          {{ error.message }}
        </h2>
        <v-btn
          color="black"
          x-large
          class="mt-6 text-caption text-capitalize"
          dark
          nuxt
          to="/"
        >
          go to the home page
        </v-btn>
      </div>
    </div>
  </v-app>
</template>

<script>
import TheLogoStatic from '~/components/navigation/TheLogoStatic.vue'
export default {
  name: 'EmptyLayout',
  components: { TheLogoStatic },
  layout: 'empty',
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  data () {
    return {
      pageNotFound: '404 Not Found',
      otherError: 'An error occurred'
    }
  },
  head () {
    const title =
      this.error.statusCode === 404 ? this.pageNotFound : this.otherError
    return {
      title
    }
  }
}
</script>

<style scoped>
h1 {
  font-size: 180px;
}
</style>
