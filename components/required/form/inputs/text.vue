<template>
  <div class="input_box">
    <label
      v-if="labelFor"
      class="input_box-label"
      :class="classLabelObject"
      :for="labelFor"
    >{{ label }}</label>
    <input
      class="input_box-input"
      spellcheck="false"
      :value="value"
      :class="classObject"
      :type="type"
      :placeholder="placeholder"
      :disabled="disabled"
      :readonly="readonly"
      @input="$emit('input', $event.target.value)"
    >
  </div>
</template>

<script>
export default {
  props: {
    value: {
      required: true,
      validator: (prop) => {
        return (
          typeof prop === 'string' ||
          typeof prop === 'number' ||
          typeof prop === 'object' ||
          typeof prop === 'undefined'
        )
      },
      default: null
    },
    placeholder: {
      type: String,
      required: true
    },
    type: {
      type: String,
      required: false,
      default: 'text'
    },
    disabled: {
      type: Boolean,
      default: false
    },
    readonly: {
      type: Boolean,
      default: false
    },
    labelFor: {
      type: String,
      required: true
    },
    label: {
      type: String,
      default: ''
    },
    light: {
      type: Boolean,
      default: false
    },
    required: {
      type: Boolean,
      default: false
    },
    labelClass: {
      type: [Object, Array],
      default: () => []
    },
    inputClass: {
      type: [Object, Array],
      default: () => []
    },
    inputStyle: {
      type: [Object, Array],
      default: () => []
    }
  },
  computed: {
    classLabelObject () {
      const formatObject = {
        light: this.light
      }
      return [formatObject, ...this.labelClass]
    },
    classObject () {
      const formatObject = {
        light: this.light
      }
      return [formatObject, ...this.inputClass]
    }
  }
}
</script>

<style lang="scss" scoped>
.input_box {
  margin-top: 20px;
  &:first-child {
    margin-top: 0;
  }
  &-label {
    display: block;
    margin-bottom: 5px;
    background: $secondary_color;
    width: fit-content;
    font-size: 18px;
  }
  &-input {
    width: calc(100% - 22px);
    padding: 10px;
    outline: none;
    border: 1px solid $primary_color;
    border-radius: 5px;
    font-size: 14px;
  }
}
</style>
