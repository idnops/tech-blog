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
        dark: this.dark === true,
        light: this.dark === false
      }
    }
  }

}
</script>

<style lang="scss" scoped>
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
        background-color: #1C1C1C;
    }
}

.light{
    background-color: rgba(0, 0, 0, 0.15);
}

.light.divider{
    &::after{
        background-color: #F7F8F9;
    }
}
</style>
