<template>
  <v-btn
    :ripple="false"
    active-class="toolbar-btn--active"
    class="toolbar-item"
    text
    nuxt
    exact
    v-bind="$attrs"
  >
    <slot />
  </v-btn>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.toolbar-item{
    text-transform: capitalize;
    letter-spacing: 0.001em;
    font-weight: 500;
    opacity: 0.75;
    &:hover,&:active,&:focus{
        opacity: 1;
        &::before{
            opacity: 0;
        }
    }
}

.toolbar-btn--active{
    opacity: 1;
    &::before{
        opacity: 0;
    }
}
</style>
