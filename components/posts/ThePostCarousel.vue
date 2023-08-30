<template>
  <div>
    <swiper
      :slides-per-view="3"
      :slides-offset-before="-214"
      :space-between="20"
      :navigation="true"
      :loop="true"
      :centered-slides="true"
    >
      <swiper-slide
        v-for="post in posts"
        :key="post.id"
      >
        <carousel-item :post="post" />
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import { Navigation, Pagination } from 'swiper'

import { SwiperCore, Swiper, SwiperSlide } from 'swiper-vue2'

// Import Swiper styles
import 'swiper/swiper-bundle.css'
import CarouselItem from './CarouselItem.vue'

SwiperCore.use([Navigation, Pagination])

export default {
  components: {
    Swiper,
    SwiperSlide,
    CarouselItem
  },
  props: {
    posts: {
      type: Array,
      required: true
    }
  }
}
</script>

<style lang="scss">
.swiper-slide:not(.swiper-slide-active, .swiper-slide-next){
  .post-details{
    opacity: 0;
  }
}

.swiper-button-prev, .swiper-button-next{
  height: 100%;
  width: 194px;
  top: 22px;
  color: #fff;

  &::after{
    font-size: 24px;
  }
}

.swiper-button-prev{
  left: 0;
}

.swiper-button-next{
  right: 0;
}
</style>
