<template>
  <div>
    <v-tabs
      height="60"
      center-active
      background-color="transparent"
      slider-size="1"
      class="tabs"
      color="black"
      :ripple="false"
      @change="handleChange"
    >
      <v-tab v-for="tab in tabs" :key="tab.name" nuxt exact :to="`/?${tab.param}=${tab.url}`">
        {{ tab.name }}
      </v-tab>
    </v-tabs>
    <v-btn v-if="add" icon class="add">
      <v-icon small>
        mdi-plus
      </v-icon>
    </v-btn>
  </div>
</template>

<script>
export default {
  data () {
    return {
      add: true,
      tabs: [
        {
          name: 'For you',
          url: '',
          param: ''
        },
        {
          name: 'Following',
          url: 'following',
          param: 'feed'
        },
        {
          name: 'UI',
          url: 'ui',
          param: 'tag'
        },
        {
          name: 'Node JS',
          url: 'node-js',
          param: 'tag'
        },
        {
          name: 'Web development',
          url: 'web-development',
          param: 'tag'
        },
        {
          name: 'Machine learning',
          url: 'machine-learning',
          param: 'tag'
        },
        {
          name: 'Self improvement',
          url: 'self-improvement',
          param: 'tag'
        },
        {
          name: 'Technology',
          url: 'technology',
          param: 'tag'
        },
        {
          name: 'Web 3',
          url: 'web-3',
          param: 'tag'
        }

      ]
    }
  },
  mounted () {
    this.observer = new MutationObserver((mutations) => {
      for (const m of mutations) {
        const newValue = m.target.getAttribute(m.attributeName)
        this.$nextTick(() => {
          this.onClassChange(newValue, m.oldValue)
        })
      }
    })

    this.observer.observe(document.getElementsByClassName('v-slide-group__prev')[0], {
      attributes: true,
      attributeOldValue: true,
      attributeFilter: ['class']
    })
  },
  beforeDestroy () {
    this.observer.disconnect()
  },
  methods: {
    onClassChange (classAttrValue) {
      const classList = classAttrValue.split(' ')
      if (classList.includes('v-slide-group__prev--disabled')) {
        this.add = true
      } else {
        this.add = false
      }
    },
    handleChange (tab) {
      const tabUrl = tab.split('=')[1]
      this.$emit('change', tabUrl)
    }
  }
}
</script>

<style lang="scss">
@import '~vuetify/src/styles/styles.sass';

.theme--light.v-divider {
    border-color: rgba(0, 0, 0, 0.05);
}

.theme--dark.v-divider {
    border-color: rgba(255, 255, 255, 0.05);
}

.v-ripple__container {
    display:none !important;
}

.tabs{

    .v-item-group{
        &::after{
            content: '';
            position: absolute;
            width: 100%;
            height: 1px;
            background: rgba(0, 0, 0, 0.05);
            bottom: 0;
        }
    }

    .v-tab{
        text-transform: none;
        font-weight: normal;
        min-width: 0;
        letter-spacing: 0.01em;
        color: rgba(0, 0, 0, 0.6) !important;

        &:hover,&:focus{
            color: rgba(0, 0, 0, 1) !important;

            &::before{
                opacity: 0 !important;
            }
        }
    }

    .v-tab--active{
        color: rgba(0, 0, 0, 1) !important;
    }

    .v-slide-group__prev,.v-slide-group__next{
        .v-icon{
            color: rgba(0, 0, 0, 0.6) !important;
        }

        &:hover{
            .v-icon{
                color: rgba(0, 0, 0, 1) !important;

            }
        }
    }
}

.add{
    position: absolute;
    top: 12px;
    left: 8px;
    .v-btn__content{
            color: rgba(0, 0, 0, 0.6);
        }

    &:hover{
        .v-btn__content{
            color: rgba(0, 0, 0, 1);
        }
    }
}
</style>
