<template>
  <div class="nuxt-error">
    <component :is="errorPage" :error="error" />
  </div>
</template>
<script>
import error404 from '@/components/errors/404.vue'
import error500 from '@/components/errors/500.vue'
export default {
  name: 'NuxtError',

  layout: 'clean', // optional

  props: {
    error: {
      type: Object,
      default: () => {}
    }
  },

  computed: {
    errorPage () {
      if (this.error.statusCode === 404) {
        return error404
      }
      // catch everything else
      return error500
    }
  }
}
</script>
