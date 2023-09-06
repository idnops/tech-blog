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

    <v-form v-model="isFormValid" @submit.prevent="handleSubmit">
      <div class="input-control">
        <label for="email" :class="[!dark ? 'black--text' : 'white--text']">Email or username</label>
        <v-text-field
          v-model="username"
          :rules="[rules.required]"
          filled
          outlined
          :color="!dark ? 'black' : 'grey lighten-3'"
          dense
          type="email"
          hide-details="auto"
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
          v-model.trim="password"
          :rules="[rules.required, rules.min]"
          filled
          outlined
          :color="!dark ? 'black' : 'grey lighten-3'"
          dense
          :type="!showPassword ? 'password' : 'text'"
          hide-details="auto"
        />
        <v-slide-x-reverse-transition mode="out-in" :duration="50">
          <v-icon v-if="password" small class="input-icon" @click="showPassword = !showPassword">
            {{ !showPassword ? 'mdi-eye' : 'mdi-eye-off' }}
          </v-icon>
        </v-slide-x-reverse-transition>
      </div>

      <v-btn
        x-large
        block
        class="text-caption mt-8"
        :class="[dark ? 'black--text' : 'white--text']"
        :color="!dark ? 'black' : 'white'"
        type="submit"
        :disabled="!isFormValid"
      >
        sign in
      </v-btn>
    </v-form>

    <div class="d-flex align-center justify-center my-4">
      <span class="body-2 mr-2">Don't have an account?</span>
      <nuxt-link class="body-2" to="/auth/signup">
        Sign up
      </nuxt-link>
    </div>

    <v-scroll-y-transition mode="out-in" :duration="50">
      <v-alert
        v-if="error"
        dense
        text
        class="text-caption"
        color="error"
      >
        {{ error }}
      </v-alert>
    </v-scroll-y-transition>
  </div>
</template>

<script>
import TheLogo from '~/components/navigation/TheLogo.vue'
import DividerItem from '~/components/ui/DividerItem.vue'
export default {
  components: { TheLogo, DividerItem },
  layout: 'auth',
  data () {
    return {
      isFormValid: false,
      username: '',
      password: '',
      showPassword: false,
      rules: {
        required: value => !!value || 'Required.',
        min: v => v.length >= 6 || 'Min 6 characters'
      },
      error: null
    }
  },
  head: {
    title: 'Sign in'
  },
  computed: {
    dark () {
      return this.$vuetify.theme.dark
    }
  },
  mounted () {
    if (this.$route.query.message === 'signout') {
      this.error = 'hope to see you again, bye bye'
    }
  },
  methods: {
    async handleSubmit () {
      const userDetails = {
        email: this.username,
        password: this.password
      }

      try {
        this.error = null
        await this.$store.dispatch('auth/SIGN_IN', userDetails)
        this.$router.push('/')
      } catch (error) {
        this.error = error
      }
    }
  }

}
</script>

<style lang="scss" scoped>
@import '~vuetify/src/styles/settings/_variables';

.auth-content{
    margin-left: 100px;
    padding: 30px 60px 0;
    width: 100%;
    max-width: 540px;
}

.input-control{
    margin-top: 26px;
    position: relative;
}

.input-icon{
    position: absolute;
    right: 15px;
    top: 33px;
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

@media #{map-get($display-breakpoints, 'md-and-down')} {
    .auth-content{
      margin: 0;
      min-width: 540px;
    }
}
@media #{map-get($display-breakpoints, 'xs-only')} {
    .auth-content{
      min-width: 450px;
    }
}
</style>
