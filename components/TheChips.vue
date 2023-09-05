<template>
  <div>
    <v-chip-group>
      <v-chip
        v-for="tag in tags"
        :key="tag.name"
        nuxt
        active-class="tag-active"
        :to="`/tag/${tag.url}`"
        color="grey lighten-3"
      >
        {{ tag.name }}
      </v-chip>
    </v-chip-group>
  </div>
</template>

<script>
export default {
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
  }
}
</script>

<style lang="scss" scoped>
.v-chip.v-size--default{
  height: 36px;
  padding: 22px;
  border-radius: 24px;
  text-transform: capitalize;
  font-size: 0.75rem;
  margin-right: 16px;
}

.theme--light.v-chip--active:hover::before{
    opacity: 1;
}

.tag-active::before{
    border: 1px solid rgba(0,0,0, 0.8);
    opacity: 1;
    background-color: transparent;

}

</style>
