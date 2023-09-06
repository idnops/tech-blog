<template>
  <div class="auth-content">
    <div class="header d-flex align-center my-8" :class="[!dark ? 'black--text' : 'white--text']">
      <h2 class="font-weight-bold mr-4">
        Sign up to
      </h2>
      <nuxt-link to="/">
        <the-logo />
      </nuxt-link>
    </div>
    <v-scroll-y-reverse-transition mode="out-in" :duration="150">
      <div v-if="!emailSignUp" key="buttons" class="buttons">
        <v-btn
          x-large
          block
          class="text-caption text-capitalize"
          :dark="!dark"
          :light="dark"
        >
          <v-icon small class="mr-4">
            mdi-google
          </v-icon>
          sign up with google
        </v-btn>
        <divider-item text="or" />
        <v-btn
          x-large
          block
          class="text-caption text-capitalize"
          outlined
          @click="emailSignUp = true"
        >
          continue with email
        </v-btn>
        <div class="terms mt-6 text-caption text-center">
          By creating an account you agree with our Terms of Service, Privacy Policy.
        </div>
      </div>
      <div v-else key="signup-form" class="signup-form">
        <v-form v-model="isFormValid" @submit.prevent="handleSubmit">
          <v-row>
            <v-col>
              <div class="input-control">
                <label for="name" :class="[!dark ? 'black--text' : 'white--text']">Name</label>
                <v-text-field
                  v-model="name"
                  :rules="[rules.required]"
                  filled
                  outlined
                  :color="!dark ? 'black' : 'grey lighten-3'"
                  dense
                  type="email"
                  hide-details="auto"
                />
              </div>
            </v-col>
            <v-col>
              <div class="input-control">
                <label for="username" :class="[!dark ? 'black--text' : 'white--text']">Username</label>
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
            </v-col>
          </v-row>
          <div class="input-control">
            <label for="email" :class="[!dark ? 'black--text' : 'white--text']">Email</label>
            <v-text-field
              v-model="email"
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
          <div class="input-control d-flex align-center">
            <v-checkbox v-model="terms" color="grey" :rules="[rules.checked]" />
            <label for="terms" class="text-body-2">
              I agree with Terms of Service, Privacy Policy.</label>
          </div>
          <div class="input-control">
            <v-btn
              x-large
              block
              class="text-caption"
              :class="[dark ? 'black--text' : 'white--text']"
              :color="!dark ? 'black' : 'white'"
              type="submit"
              :disabled="!isFormValid"
            >
              create account
            </v-btn>
          </div>
        </v-form>
      </div>
    </v-scroll-y-reverse-transition>
    <div class="d-flex align-center justify-center my-4">
      <span class="body-2 mr-2">Already have an account?</span>
      <nuxt-link class="body-2" to="/auth/signin">
        Sign in
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
  data () {
    return {
      isFormValid: false,
      name: '',
      username: '',
      email: '',
      password: '',
      terms: false,
      showPassword: false,
      emailSignUp: false,
      rules: {
        required: value => !!value || 'Required.',
        min: v => v.length >= 6 || 'Min 6 characters',
        checked: v => v === true || ''
      },
      error: null
    }
  },
  computed: {
    dark () {
      return this.$vuetify.theme.dark
    }
  },
  methods: {
    async handleSubmit () {
      const userDetails = {
        email: this.email,
        password: this.password,
        name: this.name,
        username: this.username
      }

      try {
        this.error = null
        await this.$store.dispatch('auth/SIGN_UP', userDetails)
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
    top: 36px;
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
