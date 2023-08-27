<template>
  <v-app>
    <div class="main-container">
      <section class="auth-sidebar">
        <div class="auth-sidebar-content">
          <video
            playsinline=""
            class="auth-sidebar-video"
            autoplay=""
            loop=""
            muted=""
            :src="dark ? '/auth_sidebar_video_dark_theme.mp4' : '/auth_sidebar_video_light_theme.mp4'"
          />
        </div>
      </section>
      <section class="content">
        <v-main>
          <Nuxt />
        </v-main>
      </section>
    </div>
  </v-app>
</template>

<script>

export default {
  computed: {
    dark () {
      return this.$vuetify.theme.dark
    }
  }
}
</script>

<style lang="scss" scoped>
.main-container{
    display: flex;
    flex-direction: row;
    align-items: stretch;
    height: 100%;
    overflow: hidden;
}

.auth-sidebar{
    width: 500px;
}

.auth-sidebar-content{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
}

.auth-sidebar-video{
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.content{
    width: 100%;
    display: flex;
    flex: 1;
    flex-direction: column;
    overflow: auto;
}

main{
    display: flex;
    flex-grow: 1;
    align-items: center;
    justify-content: flex-start;
}
</style>
