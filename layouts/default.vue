<template>
  <div>
    <navigationPrimary />
    <Nuxt />
  </div>
</template>

<script>
import navigationPrimary from '@/components/layouts/navbar'
export default {
  components: {
    navigationPrimary
  }
}
</script>
