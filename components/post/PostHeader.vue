<template>
  <div class="header">
    <h1 class="font-weight-bold post-title text-h4 text-md-h3">
      {{ title }}
    </h1>
    <h2 class="text-h5 my-2 post-description">
      {{ description }}
    </h2>
    <div class="author-info d-flex align-center my-6">
      <v-avatar size="52" :color="dark ? 'white' : 'black'">
        <v-img v-if="avatar" :src="`/${avatar}.jpg`" />
        <span
          v-else
          class="text-caption text-uppercase"
          :class="[dark ? 'black--text' : 'white--text']"
        >{{ getInitials(author) }}</span>
      </v-avatar>
      <div class="d-flex flex-column ml-4">
        <div class="author d-flex align-center">
          <span class="text-body-1 text-capitalize">{{ author }}</span>
          <div class="dot" />
          <v-btn
            small
            plain
            :ripple="false"
            class="text-capitalize text-body-1 pa-0"
            :color="follow ? 'red': ''"
            @click="follow = !follow"
          >
            {{ follow ? 'following' : 'follow' }}
          </v-btn>
        </div>
        <div class="date d-flex align-center">
          <span class="text-caption text-capitalize">published </span>
          <div class="dot" />
          <span class="text-caption text-capitalize">{{ published }} </span>
        </div>
      </div>
    </div>
    <v-divider />
  </div>
</template>

<script>
import moment from 'moment'
import profile from '~/mixins/profile.js'
export default {
  mixins: [profile],
  props: {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    author: {
      type: String,
      required: true
    },
    avatar: {
      type: String,
      required: false,
      default: () => ''
    },
    date: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      follow: false
    }
  },
  computed: {
    published () {
      return moment(this.date).format('DD MMM YYYY')
    },
    dark () {
      return this.$vuetify.theme.dark
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~vuetify/src/styles/styles.sass';
.post-title, .post-description{
    width: 70%;
}

@media #{map-get($display-breakpoints, 'md-and-down')} {
    .post-title, .post-description {
      width: 100%;
    }
}

.dot{
    width: 3px;
    height: 3px;
    border-radius: 50%;
    background-color: grey;
    margin: 0 10px;
}
</style>
