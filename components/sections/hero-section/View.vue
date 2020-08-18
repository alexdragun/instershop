<template>
  <section class="wrapper positionRelative">
    <img
      class="image-cover"
      src="~/static/images/sections/marketing.svg"
      alt="marketing"
    >
    <div class="image-overlay" />
    <div class="container">
      <div>
        <h1>{{ title }}</h1>
        <h4>{{ subtitle }}</h4>
        <nuxt-link
          class="button"
          :to="link"
        >
          <span>{{ linkName }}</span>
        </nuxt-link>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data () {
    return {
      title: 'WELCOME TO INSTERSHOP',
      subtitle: 'Check our shop',
      linkName: 'Go to shop',
      link: '/'
    }
  }
}
</script>

<style lang="scss" scoped>
.wrapper {
  margin-top: 54px;
  height: calc(100vh - 111px);
  .image {
    &-cover {
      padding-top: 40px;
      display: block;
      width: 100%;
      height: calc(100% - 40px);
    }
    &-overlay {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: rgba(255, 255, 255, 0.2);
    }
  }
  .container {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    h1 {
      position: relative;
      margin-bottom: 10px;
      color: $primary_color;
      font-family: $font_overlock;
      &:before {
        content: '';
        pointer-events: none;
        width: 40px;
        height: 20px;
        border-top: 5px solid $primary_color;
        border-left: 5px solid $primary_color;
        position: absolute;
        top: 0;
        left: -15px;
      }
    }
    h4 {
      margin-bottom: 40px;
      color: $primary_color;
    }
  }
}
</style>
