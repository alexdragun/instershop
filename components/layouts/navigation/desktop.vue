<template>
  <div>
    <div class="nav-up">
      <div class="nav-up__inner">
        <div class="width">
          <h4 style="color: #ffffff">Logo</h4>
        </div>
        <div class="width flex align-center">
          <div
            class="positionRelative"
            style="margin: 0 auto; width: 100%; max-width: 600px;"
          >
            <input
              class="search"
              type="text"
              spellcheck="false"
            >
            <button class="search-icon">
              <i class="fas fa-search" />
            </button>
          </div>
        </div>
        <div class="width flex justify-end">
          <div class="flex align-center">
            <nuxt-link
              class="link"
              to="/login"
            >
              Login
            </nuxt-link>
            <nuxt-link
              class="link"
              to="/register"
            >
              Register
            </nuxt-link>
            <i class="fas fa-shopping-cart" />
          </div>
        </div>
      </div>
    </div>
    <div class="nav-down">
      <div class="nav-down__inner">
        test
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .nav {
    &-up {
      padding: 10px 20px;
      background-color: $black;
      &__inner {
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-wrap: wrap;
        margin: 0 auto;
        width: 100%;
        max-width: 1300px;
        .width {
          width: calc(60% - 20px);
          margin: 0 15px;
          &:first-child {
            width: calc(20% - 20px);
            margin-left: 0;
          }
          &:last-child {
            width: calc(20% - 20px);
            margin-right: 0;
          }
        }
        .link {
          position: relative;
          text-decoration: none;
          color: $secondary_color;
          font-size: 18px;
          font-family: $font_nunito;
          &:first-child {
            margin-right: 20px;
          }
          &:after {
            content: '';
            display: block;
            opacity: 0;
            width: 0;
            height: 2px;
            background-color: $primary_color;
            transition: 0.5s;
          }
          &:hover {
            &:after {
              width: 100%;
              opacity: 1;
            }
          }
        }
        .fa-shopping-cart {
          margin-left: 30px;
          cursor: pointer;
          color: $secondary_color;
          font-size: 18px;
          transition: 0.3s;
          &:hover {
            color: $primary_color;
          }
        }
      }
    }
    &-down {
      background-color: $primary_color;
      &__inner {

      }
    }
  }
</style>
