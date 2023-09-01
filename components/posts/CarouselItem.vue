<template>
  <article>
    <nuxt-link :to="`/post/${post.slug}`">
      <v-hover v-slot="{ hover }">
        <div class="wrapper">
          <div class="post-image">
            <v-img :src="`/posts/${post.img}.jpg`" :lazy-src="`/posts/${post.img}_thumbnail.png`" height="540" width="420" :class="{'img-on-hover': hover}" />
          </div>

          <div class="post-details">
            <span class="tag text-uppercase font-weight-bold text-caption">{{ post.tags[0] }}</span>
            <h4 class="title text-h4">
              {{ post.title | truncate(35, '...') }}
            </h4>
            <div class="author d-flex align-center">
              <v-avatar size="42" color="white">
                <span class="black--text text-caption text-uppercase">{{ authorInitials }}</span>
              </v-avatar>
              <div class="d-flex flex-column ml-2">
                <span class="text-caption text-uppercase">{{ post.author }}</span>
                <span class="text-caption text-uppercase">{{ postTime }}</span>
              </div>
            </div>
          </div>
        </div>
      </v-hover>
    </nuxt-link>
  </article>
</template>

<script>
import moment from 'moment'
export default {
  props: {
    post: {
      type: Object,
      required: true
    }
  },
  computed: {
    authorInitials () {
      return this.post.author.slice(0, 2)
    },
    postTime () {
      return moment(this.post.created_at).fromNow()
    }
  }

}
</script>

<style lang="scss" scoped>
.post-details{
    position: absolute;
    bottom: 0;
    padding: 20px;
    color: #fff;
}

.title{
    line-height: 1.2em;
    margin: 30px 0;
    font-weight: bold;
    text-transform: capitalize;
}

.v-image {
  transition: .3s ease-in-out;
}

.img-on-hover {
  filter: brightness(75%);
}

</style>
