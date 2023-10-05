<template>
  <v-app :dark="dark">
    <the-nav-bar />
    <google-onetap />

    <v-container>
      <v-row>
        <v-col class="main-wrapper-col">
          <v-main>
            <Nuxt />
            <dialog-main />
          </v-main>
        </v-col>
        <v-divider vertical class="app-separator" />
        <v-col cols="3" class="app-sidebar">
          <div v-if="loading" class="sidebar pl-6 pt-10">
            <sidebar-content-skeleton v-for="n in 2" :key="n" class="my-10" />
          </div>
          <div v-else class="sidebar pl-6 pt-10">
            <component :is="sidebar" />
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
import TheNavBar from '~/components/navigation/TheNavBar.vue'

import SidebarContentSkeleton from '~/components/skeletons/SidebarContentSkeleton.vue'
import SidebarDefault from '~/components/SidebarDefault.vue'
import SidebarArticle from '~/components/SidebarArticle.vue'
import GoogleOnetap from '~/components/GoogleOnetap.vue'
import DialogMain from '~/components/dialogs/DialogMain.vue'

export default {
  name: 'DefaultLayout',
  components: { TheNavBar, SidebarContentSkeleton, SidebarDefault, SidebarArticle, GoogleOnetap, DialogMain },
  middleware: 'auth',
  data () {
    return {
      loading: false
    }
  },
  computed: {
    sidebar () {
      return this.$route.name === 'new' ? 'sidebar-article' : 'sidebar-default'
    },
    dark () {
      return this.$vuetify.theme.dark
    }
  },
  created () {
    this.loading = true
    setTimeout(() => {
      this.loading = false
    }, 1000)
  },
  mounted () {
    this.$store.dispatch('auth/RESTORE_USER')
  }
}
</script>

<style lang="scss" scoped>
.app-separator{
  margin-top: 56px;
}

.app-sidebar{
  padding-top: 56px;
}

.main-wrapper-col{
  min-height: calc(100vh - 57px);
}

.sidebar{
  position: sticky;
  top: -220px;
}
</style>
