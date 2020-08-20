<template>
  <div class="wrapper">
    <div class="container">
      <sidebar />
      <div style="width: 100%;">
        <product />
      </div>
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
  margin-bottom: 60px;
  .container {
    padding-top: 40px;
    display: flex;
    @include tablet {
      flex-direction: column;
    }
  }
}
</style>
