<template>
  <div>
    <v-tabs
      height="60"
      center-active
      slider-size="1"
      class="tabs"
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

.tabs.theme--dark{
  .v-tabs-bar{
    background-color: map-get($material-dark, 'background');
  }

  .v-tabs-slider{
    background-color: white;
  }

  .v-item-group{
    &::after{
      background: rgba(255, 255, 255, 0.05) !important;
    }
  }

  .v-tab{
    color: rgba(255, 255, 255, 0.6) !important;

    &:hover,&:focus{
      color: rgba(255, 255, 255, 1) !important;
    }
  }

  .v-tab--active{
    color: rgba(255, 255, 255, 1) !important;
  }

  .v-slide-group__prev,.v-slide-group__next{
        .v-icon{
            color: rgba(255, 255, 255, 0.6) !important;
        }

        &:hover{
            .v-icon{
                color: rgba(255, 255, 255, 1) !important;
            }
        }
    }

}

.tabs.theme--light{
  .v-tabs-bar{
    background-color: map-get($material-light, 'background');
  }

  .v-tabs-slider{
    background-color: black;
  }

  .v-item-group{
    &::after{
      background: rgba(0, 0, 0, 0.05) !important;
    }
  }

  .v-tab{
    color: rgba(0, 0, 0, 0.6) !important;

    &:hover,&:focus{
      color: rgba(0, 0, 0, 1) !important;
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
.tabs{

    .v-item-group{
        &::after{
            content: '';
            position: absolute;
            width: 100%;
            height: 1px;
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
}

.add.theme--light{
  .v-btn__content{
    color: rgba(0, 0, 0, 0.6);
  }

  &:hover{
    .v-btn__content{
      color: rgba(0, 0, 0, 1);
    }
  }
}

.add.theme--dark{
  .v-btn__content{
    color: rgba(255, 255, 255, 0.6);
  }

  &:hover{
    .v-btn__content{
      color: rgba(255, 255, 255, 1);
    }
  }
}
</style>
