<template>
  <div class="post-card-default py-8" :class="[dark ? 'theme--dark' : 'theme--light']">
    <div class="post-details d-flex align-center">
      <div class="post-author">
        <v-avatar size="30" :color="dark ? 'white' : 'black'">
          <v-img v-if="post.avatar" :src="`/${post.avatar}.jpg`" />

          <span
            v-else
            class="text-caption text-uppercase"
            :class="[dark ? 'black--text' : 'white--text']"
          >{{ getInitials(post.author) }}</span>
        </v-avatar>
        <span class="text-caption pl-2" :class="[!dark ? 'black--text' : 'white--text']">{{ post.author }}</span>
      </div>
      <div class="dot" />
      <div class="post-published text-caption" :class="[!dark ? 'grey--text text--darken-1' : 'grey--text text--lighten-1']">
        {{ published }}
      </div>
    </div>
    <div class="d-flex">
      <div class="post-content">
        <n-link :to="`/post/${post.slug}`" tag="div">
          <div class="post-body my-2">
            <div class="post-title font-weight-bold text-h6">
              {{ post.title | truncate(90, '...') }}
            </div>
            <div class="post-description my-2">
              {{ post.description | truncate(250, '...') }}
            </div>
          </div>
        </n-link>
        <div class="post-actions d-flex align-center justify-space-between text-capitalize mt-8">
          <div class="post-tag">
            <v-chip small class="mr-2" :color="!dark ? 'grey lighten-3' : 'grey darken-2'" nuxt :to="`/tag/${post.tags[0]}`">
              {{ post.tags[0] }}
            </v-chip>
            <span class="text-caption" :class="[!dark ? 'grey--text text--darken-1' : 'grey--text text--lighten-1']">5 min read</span>
          </div>
          <div class="post-button">
            <post-bookmark :post="post" />
            <v-btn icon plain>
              <v-icon>mdi-minus-circle-outline</v-icon>
            </v-btn>
            <post-more />
          </div>
        </div>
      </div>
      <div class="post-image">
        <n-link :to="`/post/${post.slug}`">
          <v-img
            :src="`/posts/${post.img}.jpg`"
            :lazy-src="`/posts/${post.img}_thumbnail.png`"
            height="140"
            width="140"
            aspect-ratio="1"
            class="rounded"
          />
        </n-link>
      </div>
    </div>
  </div>
</template>

<script>
import moment from 'moment'
import profile from '~/mixins/profile'
import PostBookmark from '~/components/post/button/PostBookmark.vue'
import PostMore from '~/components/post/button/PostMore.vue'

export default {
  components: { PostBookmark, PostMore },
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
.theme--light.v-btn.v-btn--icon{
  color: rgba(0, 0, 0, 0.6);

  &:hover{
    color: rgba(0, 0, 0, 1);
  }
}
.dot{
    width: 3px;
    height: 3px;
    border-radius: 50%;
    background-color: grey;
    margin: 0 6px;
}

.post-card-default.theme--light:not(:first-child){
  border-top: 1px solid rgba(0,0,0, 0.05);
}
.post-card-default.theme--dark:not(:first-child){
  border-top: 1px solid rgba(255,255,255, 0.05);
}

.post-content{
  flex: 1 1 auto;

  .post-body{
    cursor: pointer;
  }

  .post-description{
    min-height: 70px;
    font-family: Noto-Serif, serif;
    font-size: 18px;
  }
}

.post-image{
    margin-left: 60px;
}

.v-chip.v-size--small{
  padding: 14px;
  border-radius: 24px;
  text-transform: capitalize;
  font-size: 0.75rem;
}
</style>
