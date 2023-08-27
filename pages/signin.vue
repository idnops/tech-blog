<template>
  <div class="auth-content">
    <div class="header d-flex align-center my-8" :class="[!dark ? 'black--text' : 'white--text']">
      <h2 class="font-weight-bold mr-4">
        Sign in to
      </h2>
      <nuxt-link to="/">
        <the-logo />
      </nuxt-link>
    </div>
    <v-btn
      outlined
      x-large
      block
      class="text-caption text-capitalize"
    >
      <v-icon small class="mr-4">
        mdi-google
      </v-icon>
      sign in with google
    </v-btn>
    <divider-item text="or sign in using email" />
    <div class="input-control">
      <label for="email" :class="[!dark ? 'black--text' : 'white--text']">Email or username</label>
      <v-text-field
        :filled="dark"
        outlined
        :color="!dark ? 'black' : 'grey lighten-3'"
        dense
        type="email"
        hide-details
      />
    </div>
    <div class="input-control">
      <div class="input-actions">
        <label :class="[!dark ? 'black--text' : 'white--text']" for="password">Password</label>
        <nuxt-link to="/recover">
          Forgot?
        </nuxt-link>
      </div>

      <v-text-field
        :filled="dark"
        outlined
        :color="!dark ? 'black' : 'grey lighten-3'"
        dense
        type="password"
        hide-details
      />
    </div>

    <v-btn
      x-large
      block
      class="text-caption mt-8"
      :dark="!dark"
      :light="dark"
    >
      sign in
    </v-btn>
    <div class="d-flex align-center justify-center my-4">
      <span class="body-2 mr-2">Don't have an account?</span>
      <nuxt-link class="body-2" to="/">
        Sign up
      </nuxt-link>
    </div>
  </div>
</template>

<script>
import TheLogo from '~/components/navigation/TheLogo.vue'
import DividerItem from '~/components/ui/DividerItem.vue'
export default {
  components: { TheLogo, DividerItem },
  layout: 'auth',
  head: {
    title: 'Sign in'
  },
  computed: {
    dark () {
      return this.$vuetify.theme.dark
    }
  }

}
</script>

<style lang="scss" scoped>
.auth-content{
    margin-left: 100px;
    padding: 30px 60px 0;
    width: 100%;
    max-width: 540px;
}

.input-control{
    margin-top: 26px;
}

.input-actions{
    display: flex;
    align-items: center;
    justify-content: space-between;

    a{
        font-size: 14px;
        margin-right: 4px;
    }
}

label{
    margin-left: 4px;
    font-size: 14px;
    color: #000;
    font-weight: 500;
}
</style>
