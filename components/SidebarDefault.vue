<template>
  <div class="sidebar">
    <div class="best-picks">
      <div>
        <h2 class="text-body-1 font-weight-bold text-capitalize">
          best picks
        </h2>
      </div>
      <div class="posts">
        <post-card-tiny v-for="post in filteredPosts" :key="post.id" :post="post" />
      </div>
      <div>
        <nuxt-link to="/" class="more" :class="[dark ? 'theme--dark' : 'theme--light']">
          See full list
        </nuxt-link>
      </div>
    </div>
    <v-divider class="my-6" />
    <div class="recommended-topics">
      <div>
        <h2 class="text-body-1 font-weight-bold text-capitalize">
          recommended topics
        </h2>
      </div>
      <div class="chips my-4">
        <v-chip
          v-for="tag in tags"
          :key="tag.name"
          nuxt
          exact
          :to="`/tag/${tag.url}`"
          :color="!dark ? 'grey lighten-3' : 'grey darken-2'"
        >
          {{ tag.name }}
        </v-chip>
      </div>
      <div>
        <nuxt-link to="/" class="more" :class="[dark ? 'theme--dark' : 'theme--light']">
          See more topics
        </nuxt-link>
      </div>
    </div>
    <v-divider class="my-6" />

    <div class="who-to-follow">
      <div>
        <h2 class="text-body-1 font-weight-bold text-capitalize">
          who to follow
        </h2>
      </div>
      <div class="posts">
        <user-card-tiny v-for="post in filteredPosts" :key="post.id" :post="post" />
      </div>
      <div>
        <nuxt-link to="/" class="more" :class="[dark ? 'theme--dark' : 'theme--light']">
          See more suggestions
        </nuxt-link>
      </div>
    </div>
    <v-divider class="my-6" />
    <div v-if="savedPosts.length" class="recently-saved">
      <div>
        <h2 class="text-body-1 font-weight-bold text-capitalize">
          recently saved
        </h2>
      </div>
      <div class="posts">
        <post-card-saved-tiny v-for="post in savedPostsToDisplay" :key="post.id" :post="post" />
      </div>
      <div>
        <nuxt-link to="/" class="more" :class="[dark ? 'theme--dark' : 'theme--light']">
          See all ({{ savedPosts.length }})
        </nuxt-link>
      </div>
    </div>
    <div class="links my-6">
      <a class="link-small text-capitalize">help</a>
      <a class="link-small text-capitalize">status</a>
      <a class="link-small text-capitalize">writers</a>
      <a class="link-small text-capitalize">blog</a>
      <a class="link-small text-capitalize">careers</a>
      <a class="link-small text-capitalize">privacy</a>
      <a class="link-small text-capitalize">terms</a>
      <a class="link-small text-capitalize">about</a>
      <a class="link-small text-capitalize">text to speech</a>
      <a class="link-small text-capitalize">teams</a>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

import PostCardTiny from '~/components/post/card/PostCardTiny.vue'
import UserCardTiny from '~/components/user/UserCardTiny.vue'
import PostCardSavedTiny from '~/components/post/card/PostCardSavedTiny.vue'
export default {
  components: { PostCardTiny, UserCardTiny, PostCardSavedTiny },
  data () {
    return {
      tags: [
        {
          name: 'Software development',
          url: 'software-development'
        },
        {
          name: 'Web 3',
          url: 'web-3'
        },
        {
          name: 'Data science',
          url: 'data-science'
        },
        {
          name: 'React',
          url: 'react'
        },
        {
          name: 'UX design',
          url: 'ux-design'
        },
        {
          name: 'Flutter',
          url: 'flutter'
        },
        {
          name: 'Phyton',
          url: 'phyton'
        }
      ]
    }
  },
  computed: {
    ...mapGetters({
      posts: 'blog/POSTS',
      lists: 'list/LISTS'
    }),
    path () {
      return this.$route
    },
    dark () {
      return this.$vuetify.theme.dark
    },
    filteredPosts () {
      return this.posts.slice(0, 3)
    },
    savedPosts () {
      const arr = []
      this.lists.forEach((list) => {
        const filtered = this.posts.filter(post => list.posts.includes(post.id))
        arr.push(...filtered)
      })
      return arr.reverse()
    },
    savedPostsToDisplay () {
      return this.savedPosts.slice(0, 3)
    }
  },
  created () {
    this.loading = true
    setTimeout(() => {
      this.loading = false
    }, 1000)
  }

}
</script>

<style lang="scss" scoped>
.more{
  text-decoration: none;
  letter-spacing: -0.01em;
  font-size: 0.875rem;
}

.more.theme--light{
  color: rgba(0, 0, 0, 0.6);
    &:hover,&:focus{
    color: rgba(0, 0, 0, 1);
  }
}

.more.theme--dark{
  color: rgba(255, 255, 255, 0.6);
    &:hover,&:focus{
    color: rgba(255, 255, 255, 1);
  }
}

.v-chip.v-size--default{
  height: 36px;
  padding: 18px;
  border-radius: 24px;
  margin: 5px 5px 5px 0;
  text-transform: capitalize;
  font-size: 0.75rem;
}

.links{
  line-height: 1;
}

.link-small{
  text-decoration: none;
  font-size: 0.7rem;
}
</style>
