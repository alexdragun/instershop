<template>
  <div style="margin-top: 100px;">
    {{ $route.params }}
  </div>
</template>

<script>
export default {
  head () {
    return {
      title: this.$capitalize(this.$route.params.subCategorySingle)
    }
  }
}
</script>
