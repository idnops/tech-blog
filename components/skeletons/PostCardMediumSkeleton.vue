<template>
  <div class="post-card-medium mb-12">
    <div class="post-image">
      <v-skeleton-loader
        type="image"
        height="200"
      />
    </div>
    <div class="post-author mt-6">
      <v-skeleton-loader
        type="avatar"
      />
    </div>
    <div class="post-content mt-6">
      <v-skeleton-loader
        class="pa-0"
        type="article"
      />
    </div>
  </div>
</template>

<script>

export default {

}
</script>

<style lang="scss" scoped>
.post-content{
    flex: 1 1 auto;

    .post-body{
        cursor: pointer;
    }

    .post-description{
        min-height: 70px;
    }
}
</style>
