<template>
  <div class="post-card-default py-8">
    <div class="post-details d-flex align-center">
      <v-skeleton-loader
        type="avatar"
        class="ml-4"
      />
    </div>
    <div class="d-flex">
      <div class="post-content">
        <div class="post-body my-2">
          <v-skeleton-loader
            type="article"
          />
        </div>
      </div>
      <div class="post-image">
        <v-skeleton-loader
          type="image"
          height="140"
          width="140"
        />
      </div>
    </div>
  </div>
</template>

<script>

export default {

}
</script>

<style lang="scss" scoped>
.post-card-default:not(:first-child){
    border-top: 1px solid rgba(0,0,0, 0.05);
}

.post-content{
    flex: 1 1 auto;

    .post-body{
        cursor: pointer;
    }

    .post-description{
        min-height: 70px;
    }
}

.post-image{
    margin-left: 60px;
}
</style>
