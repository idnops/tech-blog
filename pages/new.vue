<template>
  <div>
    <v-container>
      <text-editor :existing-content="content" />
    </v-container>
  </div>
</template>

<script>
import TextEditor from '~/components/TextEditor.vue'
export default {
  components: { TextEditor },
  // layout: 'clean',
  data () {
    return {
      content: null
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
