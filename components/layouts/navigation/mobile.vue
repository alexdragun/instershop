<template>
  <div>
    <div class="navigation-container">
      <div class="navigation-container__left">
        <nuxt-link to="/">
          <img src="~/static/images/logo.svg" alt="logo">
        </nuxt-link>
      </div>
      <div class="navigation-container__right">
        <i class="fas fa-user" />
        <i class="fas fa-shopping-cart" />
        <div class="hamburger" :class="{'hamburger-active': openMenu}" @click="openMobileMenu()">
          <span />
          <span />
          <span />
        </div>
      </div>
    </div>
    <transition name="slide-fade">
      <div v-if="openMenu" class="menu-container">
        <div class="menu-container__inner">
          <div
            v-for="(categories, index) in category"
            :key="categories.id"
            class="bottom-2"
          >
            <div class="category-box" :class="{ 'category-box__active': showCategories === index }">
              <nuxt-link :to="categories.categoryLink" class="category-box__left" :class="{ 'category-box__left-fullWidth': !categories.subCategory.length }">
                <div class="main-link">
                  {{ categories.categoryName }}
                </div>
              </nuxt-link>
              <div v-if="categories.subCategory.length" class="category-box__right" @click="expandCategory(index)">
                <i class="fas fa-chevron-down" :class="{ 'active': showCategories === index }" />
              </div>
            </div>
            <template v-if="index === showCategories">
              <div v-for="(subCategories, index) in categories.subCategory" :key="subCategories.id" class="bottom-1">
                <div class="subCategory-box" :class="{ 'subCategory-box__active': showSubCategories === index }">
                  <nuxt-link class="subCategory-box__left" :to="subCategories.subCategoryLink">
                    <div class="sub-link">
                      {{ subCategories.subCategoryName }}
                    </div>
                  </nuxt-link>
                  <div class="subCategory-box__right" @click="expandSubCategory(index)">
                    <i class="fas fa-chevron-down" :class="{ 'active': showSubCategories === index }" />
                  </div>
                </div>
                <template v-if="index === showSubCategories">
                  <div class="list-container">
                    <nuxt-link v-for="subCategoriesList in subCategories.subCategoryList" :key="subCategoriesList.id" class="list-link" :to="subCategoriesList.listLink">
                      {{ subCategoriesList.listName }}
                    </nuxt-link>
                  </div>
                </template>
              </div>
            </template>
          </div>
        </div>
      </div>
    </transition>
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
      openMenu: false,
      showCategories: null,
      showSubCategories: 0
    }
  },
  watch: {
    openMenu: {
      handler (val) {
        if (process.browser) {
          if (val) {
            document.body.classList.add('navigation-open')
          } else {
            document.body.classList.remove('navigation-open')
          }
        }
      }
    },

    $route: {
      handler () {
        this.openMenu = false
      }
    }
  },
  methods: {
    openMobileMenu () {
      this.openMenu = !this.openMenu
    },
    onSelectSingleProduct (categories) {
      this.selectedProduct = categories
    },
    expandCategory (i) {
      if (this.showCategories === i) {
        this.showCategories = null
      } else {
        this.showCategories = i
      }
    },
    expandSubCategory (i) {
      if (this.showSubCategories === i) {
        this.showSubCategories = null
      } else {
        this.showSubCategories = i
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .slide-fade-enter-active {
    transition: all .5s ease;
  }
  .slide-fade-leave-active {
    transition: all .3s;
  }
  .slide-fade-enter, .slide-fade-leave-to
    /* .slide-fade-leave-active below version 2.1.8 */ {
    transform: translateY(-200px);
    opacity: 0;
  }
.navigation-container {
  padding: 10px 20px;
  background-color: $primary_color;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1030;
  &__left {}
  &__right {
    display: flex;
    align-items: center;
    .fa-user, .fa-shopping-cart {
      margin-right: 5px;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 30px;
      height: 30px;
      background-color: transparent;
      color: $secondary_color;
      border-radius: 25px;
      transition: 0.3s ease;
      &:hover {
        background-color: $secondary_color;
        color: $primary_color;
      }
    }
    .hamburger {
      margin-left: 5px;
      position: relative;
      cursor: pointer;
      height: 25px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      &-active {
        span {
          &:nth-child(1) {
            margin-bottom: -2px !important;
            transform: rotate(45deg);
          }
          &:nth-child(2) {
            opacity: 0;
            margin-bottom: -2px;
          }
          &:nth-child(3) {
            margin-bottom: 0 !important;
            width: 25px !important;
            transform: rotate(-45deg);
          }
        }
      }
      span {
        display: block;
        height: 2px;
        width: 25px;
        margin-bottom: 5px;
        background-color: $secondary_color;
        opacity: 1;
        transition: 0.3s;
        &:last-child {
          margin-bottom: 0;
        }
      }
    }
  }
}
.menu-container {
  overflow: auto;
  position: fixed;
  top: 56px;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1029;
  background-color: $secondary_color;
  &::-webkit-scrollbar {
    width: 5px;
  }
  &::-webkit-scrollbar-thumb {
    background: $primary_color;
  }
  &__inner {
    padding: 20px;
    @include mediumMobile {
      padding: 10px;
    }
    .category-box {
      cursor: pointer;
      margin-bottom: 20px;
      background-color: $box-grey;
      display: flex;
      align-items: center;
      justify-content: space-between;
      transition: 0.3s ease;
      @include mediumMobile {
        margin-bottom: 15px;
      }
      &:last-child {
        margin-bottom: 0;
      }
      &:hover {
        background-color: $primary_color;
        .main-link {
          color: $secondary_color;
          text-shadow: 0 0 1px $secondary_color;
        }
        .fa-chevron-down {
          color: $secondary_color;
        }
      }
      &__active {
        background-color: $primary_color;
        .main-link {
          color: $secondary_color !important;
          text-shadow: 0 0 1px $secondary_color;
        }
        .fa-chevron-down {
          color: $secondary_color !important;
        }
      }
      &__left {
        text-decoration: none;
        padding: 15px 0 15px 15px;
        width: 30%;
        text-transform: uppercase;
        color: $primary_color;
        font-size: 18px;
        transition: 0.3s ease;
        @include mediumMobile {
          padding: 10px 0 10px 10px;
          font-size: 16px;
        }
        &-fullWidth {
          width: 100%;
          padding-right: 15px;
          @include mediumMobile {
            padding-right: 10px;
          }
        }
        &.nuxt-link-active {
          .main-link {
            text-shadow: 0 0 1px $secondary_color;
          }
        }
      }
      &__right {
        display: flex;
        justify-content: flex-end;
        padding: 15px 15px 15px 0;
        width: 70%;
        @include mediumMobile {
          padding: 10px 10px 10px 0;
        }
        .fa-chevron-down {
          color: $primary_color;
          font-size: 22px;
          transition: 0.3s ease;
          @include mediumMobile {
            font-size: 18px;
          }
          &.active {
            transform: rotate(-180deg);
          }
        }
      }
    }
    .subCategory-box {
      cursor: pointer;
      margin: 0 10px 10px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      background-color: $box-grey;
      transition: 0.3s ease;
      &:hover {
        background-color: $primary_color;
        .sub-link {
          color: $secondary_color;
          text-shadow: 0 0 1px $secondary_color;
        }
        .fa-chevron-down {
          color: $secondary_color;
        }
      }
      &__active {
        background-color: $primary_color;
        .sub-link {
          color: $secondary_color !important;
          text-shadow: 0 0 1px $secondary_color;
        }
        .fa-chevron-down {
          color: $secondary_color !important;
        }
      }
      &__left {
        display: block;
        text-decoration: none;
        padding: 10px 0 10px 10px;
        width: 30%;
        &.nuxt-link-active {
          .sub-link {
            text-shadow: 0 0 1px $secondary_color;
          }
        }
        .sub-link {
          color: $primary_color;
          transition: 0.3s ease;
        }
      }
      &__right {
        display: flex;
        justify-content: flex-end;
        padding: 10px 10px 10px 0;
        width: 70%;
        .fa-chevron-down {
          color: $primary_color;
          transition: 0.3s ease;
          &.active {
            transform: rotate(-180deg);
          }
        }
      }
    }
    .list-container {
      margin: 0 25px;
      .list-link {
        margin: 5px 0;
        display: block;
        width: fit-content;
        text-decoration: none;
        color: $primary_color;
        transition: 0.3s ease;
        &:first-child {
          margin-top: 0;
        }
        &:last-child {
          margin-bottom: 0;
        }
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
.bottom-1 {
  margin-bottom: 10px;
}
.bottom-2 {
  margin-bottom: 20px;
  @include mediumMobile {
    margin-bottom: 15px;
  }
}
</style>
