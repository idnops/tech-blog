<template>
  <div>
    <div v-for="n in 2" :key="n" class="my-4">
      <v-skeleton-loader
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

</style>
