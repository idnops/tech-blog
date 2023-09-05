<template>
  <v-footer>
    <v-container class="px-0 py-2">
      <div class="d-flex justify-space-between align-center">
        <div class="links">
          <n-link to="/" class="link-small">
            help
          </n-link>
          <n-link to="/" class="link-small">
            status
          </n-link>
          <n-link to="/" class="link-small">
            writers
          </n-link>
          <n-link to="/" class="link-small">
            blog
          </n-link>
          <n-link to="/" class="link-small">
            careers
          </n-link>
          <n-link to="/" class="link-small">
            privacy
          </n-link>
          <n-link to="/" class="link-small">
            terms
          </n-link>
          <n-link to="/" class="link-small">
            about
          </n-link>
          <n-link to="/" class="link-small">
            text to speech
          </n-link>
          <n-link to="/" class="link-small">
            teams
          </n-link>
        </div>
        <div class="logo">
          <n-link to="/">
            <the-logo-static />
          </n-link>
        </div>
      </div>
    </v-container>
  </v-footer>
</template>

<script>
import TheLogoStatic from './TheLogoStatic.vue'
export default {
  components: { TheLogoStatic }

}
</script>

<style lang="scss" scoped>
.theme--light.v-footer{
    background-color: #fff;
}
.link-small{
  text-decoration: none;
  font-size: 0.8rem;
  color: rgba(0,0,0, 0.6);
  text-transform: capitalize;
  margin-right: 12px;

  &:hover{
      color: rgba(0,0,0, 1);
  }
}
</style>
