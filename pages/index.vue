<template>
  <the-post-carousel />
</template>

<script>
import ThePostCarousel from '~/components/posts/ThePostCarousel.vue'
export default {
  components: { ThePostCarousel },
  head: {
    title: 'Your story needs to br written!',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Your story needs to br written!'
      }
    ]
  }
}
</script>
