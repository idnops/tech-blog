<template>
  <div id="editorjs" />
</template>

<script>
export default {
  props: {
    existingContent: { type: Object, default: () => {} }
  },
  data () {
    return {
      editor: null
    }
  },
  async mounted () {
    const editorOptions = {
      id: 'editorjs',
      data: this.existingContent,
      onChange: this.onChange,
      params: {
        placeholder: 'Tell your story...'
      }
    }
    this.editor = this.$editor(editorOptions)
    await this.editor.isReady
  },
  methods: {
    async onChange () {
      try {
        await this.$store.dispatch('post/CHANGE_DRAFT_STATUS', 'saving...')
        const updatedData = await this.editor.save()
        await this.$store.dispatch('post/SAVE_TO_DRAFT', updatedData)
        await this.$store.dispatch('post/CHANGE_DRAFT_STATUS', 'saved')
        this.$emit('contentChanged', updatedData)
      } catch (error) {
        await this.$store.dispatch('post/CHANGE_DRAFT_STATUS', error)
      }
    }
  }
}
</script>

<style lang="scss">
.ce-toolbar__content{
  max-width: 860px;
}
.ce-block__content{
  max-width: 760px;
}
.ce-toolbar__actions--opened{
  opacity: 0;
}

.ce-toolbar__plus,.ce-toolbox__button{
  border: 1px solid rgba(0,0,0, 0.12);
  border-radius: 50%;
  color: rgba(0,0,0, 0.6);
  margin-right: 8px;

  &:hover,&:focus{
    color: rgba(0,0,0, 1);
  }
}

.ce-toolbar__plus{
  left: -55px;
}

.ce-toolbox{
  left: 50px;
}

.cdx-block,.ce-header{
  font-family: Noto-Serif, serif;
}

.cdx-block{
  font-size: 22px;
}
.ce-header{
  font-size: 32px;
}

</style>
