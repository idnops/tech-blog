<template>
  <div>
    <v-container>
      <text-editor :existing-content="content" />
    </v-container>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import TextEditor from '~/components/TextEditor.vue'

export default {
  components: { TextEditor },
  computed: {
    ...mapGetters({
      content: 'post/DRAFT'
    })
  }
}
</script>

<style lang="scss" scoped>

</style>
