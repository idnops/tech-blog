<template>
  <hr ref="divider" class="divider" :class="cssClasses" :style="cssVars">
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      required: false,
      default: () => ''
    }
  },
  computed: {
    dark () {
      return this.$vuetify.theme.dark
    },
    cssVars () {
      return {
        '--text': JSON.stringify(this.text)
      }
    },
    cssClasses () {
      return {
        dark: this.dark,
        light: !this.dark
      }
    }
  }

}
</script>

<style lang="scss" scoped>
@import '~vuetify/src/styles/styles.sass';

.divider{
    height: 1px;
    margin: 50px 0;
    padding: 0;
    overflow: visible;
    border: none;
    color: #6e6d7a;
    text-align: center;
    &::after{
        content: var(--text);
        display: inline-block;
        position: relative;
        top: -13px;
        padding: 0 16px;
        font-size: 12px;
    }
}

.dark{
    background-color: rgba(255, 255, 255, 0.15);
}

.dark.divider{
    &::after{
        background-color: map-get($material-dark, 'background')
    }
}

.light{
    background-color: rgba(0, 0, 0, 0.15);
}

.light.divider{
    &::after{
        background-color: map-get($material-light, 'background')
    }
}
</style>
