<template>
  <div id="one-tap" />
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters({
      user: 'auth/USER'
    })
  },
  mounted () {
    window.google.accounts.id.initialize({
      prompt_parent_id: 'one-tap',
      client_id: '1067300398000-lh138lflje30c5lehtv477mq5f5bn551.apps.googleusercontent.com',
      callback: this.handleCredentialResponse
    })
    if (!this.user) {
      setTimeout(() => {
        window.google.accounts.id.prompt()
      }, 2000)
    }
  },
  methods: {
    handleCredentialResponse (response) {
      this.$store.dispatch('auth/SIGN_IN_WITH_GOOGLE_CREDENTIAL', response.credential)
    }
  }
}
</script>

<style lang="scss" scoped>
    #one-tap{
        position: fixed;
        right: 10px;
        top: 60px;
        z-index: 999;
    }
</style>
