<template>
  <div class="wrapper">
    <div class="container">
      <div class="container-box">
        <img
          src="~/static/images/auth/register.svg"
          alt="register"
        >
      </div>
      <div class="container-box">
        <div class="container-box__inner">
          <h2>Registracija</h2>
          <registerForm />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import registerForm from '@/components/required/auth/form/registerForm'
export default {
  components: {
    registerForm
  }
}
</script>

<style lang="scss" scoped>
  .wrapper {
    margin-top: 54px;
    height: calc(100vh - 111px);
    min-height: 700px;
    display: flex;
    align-items: center;
    .container {
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      padding-top: 30px;
      padding-bottom: 30px;
      &-box {
        display: flex;
        align-items: center;
        width: calc(100% / 2 - 20px);
        margin-right: 40px;
        &:last-child {
          margin-right: 0;
        }
        img {
          margin: 0 auto;
          display: block;
          width: 100%;
        }
        &__inner {
          margin: 0 auto;
          width: 100%;
          max-width: 500px;
          h2 {
            margin-bottom: 40px;
          }
        }
      }
    }
  }
</style>
