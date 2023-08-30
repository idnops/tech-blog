<template>
  <v-dialog
    v-model="dialog"
    width="700"
  >
    <v-card class="pa-12">
      <v-card-title class="text-h5">
        Create new list
      </v-card-title>

      <v-form ref="form" v-model="isValid" @submit.prevent="handleSubmit">
        <v-card-text>
          <v-text-field
            v-model="name"
            :rules="[rules.required]"
            validate-on-blur
            counter="25"
            placeholder="Give it a name"
            class="text-body-2"
            color="grey"
          />
          <v-text-field
            v-model="description"
            hint="Optional"
            counter="250"
            placeholder="Description"
            class="text-body-2"
            color="grey"
          />
        </v-card-text>

        <v-card-actions>
          <v-spacer />

          <v-btn
            color="red darken-1"
            text
            @click="dialog = false"
          >
            cancel
          </v-btn>

          <v-btn
            color="green darken-1"
            text
            type="submit"
          >
            create
          </v-btn>
        </v-card-actions>
      </v-form>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: {
    open: {
      type: Boolean,
      required: true
    }
  },
  data () {
    return {
      dialog: false,
      rules: {
        required: value => !!value || 'Required.'
      },
      name: '',
      description: '',
      isValid: false
    }
  },
  watch: {
    open () {
      if (this.open) {
        this.dialog = true
      }
    },
    dialog () {
      if (!this.dialog) {
        this.$emit('closed')
      }
    }
  },
  methods: {
    resetForm () {
      this.name = ''
      this.description = ''
      this.isValid = false
    },
    async handleSubmit () {
      this.$refs.form.validate()
      if (!this.isValid) { return }

      const list = {
        name: this.name,
        description: this.description,
        posts: []
      }

      await this.$store.dispatch('list/CREATE_BOOKMARK_LIST', list)
      this.resetForm()
      this.dialog = false
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
