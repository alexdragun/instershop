<template>
  <div class="error-container">
    <div class="error-container__inner">
      <h1>Server error</h1>
      <img src="~/static/images/error/500.svg" alt="404">
    </div>
  </div>
</template>

<script>
export default {
  name: 'Error500',
  props: {
    error: {
      type: Object,
      default: () => {}
    }
  },
  head () {
    return {
      title: 'Server error',
      meta: [
        {
          name: 'viewport',
          content:
              'width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
  .error-container {
    background-color: $secondary_color;
    height: 100vh;
    min-height: 660px;
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: center;
    &__inner {
      padding: 20px;
      h1 {
        color: $primary_color;
        margin-bottom: 60px;
      }
      img {
        display: block;
        width: 100%;
        max-width: 600px;
      }
    }
  }
</style>
