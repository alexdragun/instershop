<template>
  <div class="positionRelative">
    <!-- MAIN NAVIGATION -->
    <div class="nav-up">
      <div class="nav-up__inner">
        <div class="width">
          <nuxt-link to="/">
            <img src="~/static/images/logo.svg" alt="logo">
          </nuxt-link>
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
              Prijava
            </nuxt-link>
            <nuxt-link
              class="link"
              to="/register"
            >
              Registracija
            </nuxt-link>
            <i class="fas fa-shopping-cart" />
          </div>
        </div>
      </div>
    </div>
    <div @mouseleave="onSelectSingleProduct">
      <!-- CATEGORY MENU -->
      <div
        class="nav-down"
        :class="{ 'nav-down__offset' : offset }"
      >
        <div class="nav-down__inner">
          <ul>
            <li
              v-for="categories in category"
              :key="categories.id"
              @mouseover="onSelectSingleProduct(categories.subCategory)"
            >
              <nuxt-link
                v-if="categories.categoryLink && categories.categoryName"
                :to="categories.categoryLink"
              >
                {{ categories.categoryName }}
              </nuxt-link>
            </li>
          </ul>
        </div>
      </div>
      <!-- CATEGORY LIST MENU -->
      <transition name="slide-fade">
        <div
          v-if="selectedProduct.length > 0"
          class="category-menu"
          :class="{ 'category-menu--offset' : offset }"
        >
          <div class="category-menu__inner">
            <div
              class="category-menu__inner-padding"
              @mouseleave="onSelectSingleProduct"
            >
              <div
                v-for="subCategories in selectedProduct"
                :key="subCategories.id"
                class="category-menu__inner-width"
              >
                <div>
                  <nuxt-link
                    v-if="subCategories.subCategoryLink && subCategories.subCategoryName"
                    class="main-link"
                    :to="subCategories.subCategoryLink"
                  >
                    {{ subCategories.subCategoryName }}
                  </nuxt-link>
                </div>
                <div
                  v-for="subCategoriesList in subCategories.subCategoryList"
                  :key="subCategoriesList.id"
                  class="category-menu__inner-subCategories"
                >
                  <nuxt-link
                    v-if="subCategoriesList.listLink && subCategoriesList.listName"
                    class="sub-link"
                    :to="subCategoriesList.listLink"
                  >
                    {{ subCategoriesList.listName }}
                  </nuxt-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    category: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      offset: false,
      selectedProduct: {}
    }
  },
  mounted () {
    this.$nextTick(function () {
      if (window.removeEventListener) {
        window.addEventListener('scroll', this.scrollEvent)
      }
      this.scrollEvent()
    })
  },
  methods: {
    scrollEvent () {
      const scrollPosition = window.pageYOffset || document.documentElement.scrollTop
      this.offset = scrollPosition >= 57
    },
    onSelectSingleProduct (categories) {
      this.selectedProduct = categories
    }
  }
}
</script>

<style lang="scss" scoped>
  .slide-fade-enter-active {
    transition: all .3s ease;
  }
  .slide-fade-leave-active {
    transition: all .3s;
  }
  .slide-fade-enter, .slide-fade-leave-to
    /* .slide-fade-leave-active below version 2.1.8 */ {
    transform: translateY(30px);
    opacity: 0;
  }
  .nav {
    &-up {
      padding: 10px 20px;
      background-color: $primary_color;
      &__inner {
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-wrap: wrap;
        margin: 0 auto;
        width: 100%;
        max-width: 1300px;
        .width {
          width: calc(50% - 20px);
          margin: 0 15px;
          &:first-child {
            width: calc(25% - 20px);
            margin-left: 0;
          }
          &:last-child {
            width: calc(25% - 20px);
            margin-right: 0;
          }
        }
        .link {
          position: relative;
          text-decoration: none;
          color: $secondary_color;
          font-size: 18px;
          &:first-child {
            margin-right: 20px;
          }
          &:after {
            content: '';
            display: block;
            opacity: 0;
            width: 0;
            height: 2px;
            background-color: $secondary_color;
            transition: 0.5s;
          }
          &:hover {
            &:after {
              width: 100%;
              opacity: 1;
            }
          }
          &.nuxt-link-active {
            &:after {
              width: 100%;
              opacity: 1;
            }
          }
        }
        .fa-shopping-cart {
          display: flex;
          align-items: center;
          justify-content: center;
          margin-left: 20px;
          background-color: transparent;
          width: 35px;
          height: 35px;
          cursor: pointer;
          color: $secondary_color;
          font-size: 18px;
          border-radius: 40px;
          transition: 0.5s ease;
          &:hover {
            color: $primary_color;
            background-color: $secondary_color;
          }
        }
      }
    }
    &-down {
      background-color: $secondary_color;
      z-index: 1030;
      position: absolute;
      top: 57px;
      left: 0;
      right: 0;
      box-shadow: 0 0 10px 0 rgba(25,25,25,0.1);
      &__offset {
        position: fixed;
        top: 0;
      }
      &__inner {
        padding: 0 20px;
        ul {
          padding: 0;
          margin: 0;
          list-style: none;
          display: flex;
          align-items: center;
          justify-content: center;
          li {
            margin: 0 10px;
            padding: 15px 0;
            &:first-child {
              margin-left: 0;
            }
            &:last-child {
              margin-right: 0;
            }
            a {
              text-transform: uppercase;
              text-decoration: none;
              font-size: 18px;
              color: $primary_color;
              transition: 0.3s;
              @include fontSemiBold;
              &:hover {
                text-shadow: 0 0 1px $primary_color;
              }
              &.nuxt-link-active {
                text-shadow: 0 0 1px $primary_color;
              }
            }
          }
        }
      }
    }
  }
  .category-menu {
    padding: 0 20px;
    position: absolute;
    top: 111px;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1030;
    height: calc(100vh - 141px);
    &--offset {
      position: fixed;
      top: 54px;
      height: calc(100vh - 94px);
    }
    &__inner {
      margin: 0 auto;
      width: 100%;
      max-width: 1300px;
      background-color: $secondary_color;
      box-shadow: 0 5px 5px 0 rgba(25,25,25,0.1);
      &-padding {
        padding: 20px 40px;
        display: flex;
        flex-wrap: wrap;
        a {
          position: relative;
          width: fit-content;
          display: block;
          text-decoration: none;
          color: $primary_color;
          transition: 0.3s;
          &.main-link {
            margin-bottom: 15px;
            text-transform: uppercase;
            font-size: 18px;
            &:after {
              content: '';
              display: block;
              opacity: 0;
              width: 0;
              height: 2px;
              background-color: $primary_color;
              transition: 0.3s;
            }
            &:hover {
              &:after {
                width: 100%;
                opacity: 1;
              }
            }
            &.nuxt-link-active {
              &:after {
                width: 100%;
                opacity: 1;
              }
            }
          }
          &.sub-link {
            font-size: 16px;
            margin-bottom: 5px;
            &:hover {
              text-shadow: 0 0 1px $primary_color;
            }
            &.nuxt-link-active {
              text-shadow: 0 0 1px $primary_color;
            }
          }
        }
      }
      &-width {
        width: calc(100% / 4 - 15px);
        margin-top: 40px;
        margin-right: 20px;
        &:last-child {
          margin-right: 0;
        }
        &:nth-child(-n + 4) {
          margin-top: 0;
        }
        &:nth-child(4n + 4) {
          margin-right: 0;
        }
      }
      &-subCategories {
        margin-left: 15px;
        &:last-child {
          .sub-link {
            margin-bottom: 0;
          }
        }
      }
    }
  }
</style>
