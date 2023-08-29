<template>
  <article>
    <nuxt-link :to="`/post/${id}`">
      <v-hover v-slot="{ hover }">
        <div class="wrapper">
          <div class="post-image">
            <v-img :src="`/posts/${id}.jpg`" height="540" width="420" :class="{'img-on-hover': hover}" />
          </div>

          <div class="post-details">
            <span class="tag text-uppercase font-weight-bold text-caption">gadget</span>
            <h4 class="title text-h4">
              always keep your gadget neat an tidy
            </h4>
            <div class="author d-flex align-center">
              <v-avatar size="42" color="white">
                <span class="black--text text-caption text-uppercase">ay</span>
              </v-avatar>
              <div class="d-flex flex-column ml-2">
                <span class="text-caption text-uppercase">author name</span>
                <span class="text-caption text-uppercase">12 hour ago</span>
              </div>
            </div>
          </div>
        </div>
      </v-hover>
    </nuxt-link>
  </article>
</template>

<script>
export default {
  props: {
    id: {
      type: Number,
      required: true
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
