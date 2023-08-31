<template>
  <div class="header">
    <h1 class="text-h3 font-weight-bold post-title">
      {{ title }}
    </h1>
    <div class="author-info d-flex align-center my-6">
      <v-avatar size="52" :color="dark ? 'white' : 'black'">
        <v-img v-if="avatar" :src="avatar" />
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
.post-title{
    width: 50%;
}

@media #{map-get($display-breakpoints, 'sm-and-down')} {
    .post-title {
      width: 100%;
      line-height: 28px;
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
