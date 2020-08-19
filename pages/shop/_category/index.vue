<template>
  <div class="wrapper">
    <div class="container">
      {{this.$route.path}}
      <sidebar />
      <product />
    </div>
  </div>
</template>

<script>
export default {
  head () {
    return {
      title: this.$capitalize(this.$route.params.category)
    }
  }
}
</script>

<style lang="scss" scoped>
.wrapper {
  margin-top: 54px;
  .container {
    padding-top: 20px;
  }
}
</style>
