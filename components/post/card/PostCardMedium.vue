<template>
  <v-hover v-slot="{ hover }">
    <v-card flat nuxt :to="`/post/${post.slug}`" :ripple="false" color="transparent">
      <div>
        <v-img
          :src="`/posts/${post.img}.jpg`"
          :lazy-src="`/posts/${post.img}_thumbnail.png`"
          aspect-ratio="1.6"
          :class="{'img-on-hover': hover}"
        />
        <div class="author mt-6">
          <div class="d-flex justify-space-between">
            <div>
              <v-avatar size="30" :color="dark ? 'white' : 'black'">
                <v-img v-if="post.avatar" :src="post.avatar" />
                <span
                  v-else
                  class="text-caption text-uppercase"
                  :class="[dark ? 'black--text' : 'white--text']"
                >{{ getInitials(post.author) }}</span>
              </v-avatar>
              <span class="text-caption pl-2">{{ post.author }}</span>
            </div>
            <span class="text-caption">{{ published }}</span>
          </div>
        </div>
        <div class="post-content">
          <v-card-title class="pa-0 py-4">
            <span class="post-title font-weight-bold text-sm-body-1 text-lg-h6">
              {{ post.title | truncate(63, '...') }}
            </span>
          </v-card-title>
          <v-card-text class="pa-0 post-description">
            {{ post.description | truncate(90, '...') }}
          </v-card-text>
        </div>
        <div class="mt-4" />
        <v-card-actions class="px-0 d-flex justify-space-between">
          <div>
            <post-like :like-count="post.likes" />
            <post-comment :comment-count="post.comments" />
          </div>
          <div>
            <post-bookmark :top="false" :bottom="true" :post="post" />
          </div>
        </v-card-actions>
      </div>
    </v-card>
  </v-hover>
</template>

<script>
import moment from 'moment'
import PostLike from '../button/PostLike.vue'
import PostComment from '../button/PostComment.vue'
import PostBookmark from '../button/PostBookmark.vue'
import profile from '~/mixins/profile.js'
export default {
  components: { PostLike, PostComment, PostBookmark },
  mixins: [profile],
  props: {
    post: {
      type: Object,
      required: true
    }
  },
  computed: {
    dark () {
      return this.$vuetify.theme.dark
    },
    published () {
      return moment(this.post.created_at).format('DD MMM')
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~vuetify/src/styles/settings/_variables';

.v-card--link:focus:before{
  opacity: 0;
}

.v-image {
  transition: .3s ease-in-out;
}

.img-on-hover {
  filter: brightness(75%);
}

.post-title{
    width: 85%;
    word-break: normal;
    line-height: 1.4em;
}

.post-content{
    padding: 0;
    height: 110px;
}

@media #{map-get($display-breakpoints, 'lg-and-down')} {
    .post-title {
        width: 100%;
    }
}

@media #{map-get($display-breakpoints, 'md-and-down')} {
  .post-content {
        height: 90px;
    }
    .post-title {
        width: 100%;
        line-height: 1.1em;
    }

    .v-card__text{
      line-height: 1.1em;
    }

}

@media #{map-get($display-breakpoints, 'sm-and-down')} {
    .post-content {
        height: 80px;
    }
}

</style>
