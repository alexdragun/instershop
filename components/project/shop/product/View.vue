<template>
  <div>
    <!-- FILTER -->
    <div class="filter-container">
      <div class="filter-container__left">
        <span class="filter-text">VIEW AS</span>
        <div
          class="show show-two"
          :class="{ active: showTwo }"
          @click="clickShowTwo"
        >
          <div class="show__inner">
            <div />
            <div />
          </div>
        </div>
        <div
          class="show show-three"
          :class="{ active: showThree }"
          @click="clickShowThree"
        >
          <div class="show__inner">
            <div />
            <div />
            <div />
          </div>
        </div>
        <div
          class="show show-four"
          :class="{ active: showFour }"
          @click="clickShowFour"
        >
          <div class="show__inner">
            <div />
            <div />
            <div />
            <div />
          </div>
        </div>
        <div
          class="show show-five"
          :class="{ active: showFive }"
          @click="clickShowFive"
        >
          <div class="show__inner">
            <div />
            <div />
            <div />
            <div />
            <div />
          </div>
        </div>
      </div>
      <div class="filter-container__right">
        <span class="filter-text">SORT BY</span>
        <div class="positionRelative">
          <div
            class="select"
            @click="showSortBy = !showSortBy"
          >
            <div v-if="!showSelected">
              <span>--Select--</span>
            </div>
            <div v-else>
              <span>{{ selectedSortBy.name }}</span>
            </div>
          </div>
          <div v-if="showSortBy" class="option">
            <span
              v-for="item in sortBy"
              :key="item.id"
              @click="selectedSort(item)"
            >{{ item.name }}</span>
          </div>
        </div>
      </div>
    </div>
    <!-- PRODUCTS -->
    <div class="product-container">
      <div
        v-for="(n, index) in 7"
        :key="n.id"
        :class="{ 'product-container__two' : showTwo,
                  'product-container__three' : showThree,
                  'product-container__four' : showFour,
                  'product-container__five' : showFive}"
      >
        <div class="positionRelative product-box">
          <div
            class="positionRelative product-box__inner"
            style="overflow: hidden;"
          >
            <nuxt-link class="product-link" to="/">
              <img
                v-if="index === 0"
                class="product-image"
                src="~/static/images/products/jeans.png"
                alt="jeans"
              >
              <img
                v-else-if="index === 1"
                class="product-image"
                src="~/static/images/products/shirt.png"
                alt="shirt"
              >
              <img
                v-else
                class="product-image"
                src="~/static/images/products/shoes.png"
                alt="shoes"
              >
            </nuxt-link>
            <div class="wishlist">
              <i class="fas fa-heart" />
            </div>
            <button class="addCart absolute desktop">
              Add to cart
            </button>
          </div>
          <div class="product-box__text">
            <p>MY FIRST PRODUCT</p>
            <span class="price">70,00 HRK</span>
            <button class="addCart mobile">
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      showFive: false,
      showFour: true,
      showThree: false,
      showTwo: false,
      hideFive: false,
      hideFour: false,
      hideThree: false,
      sortBy: [
        {
          id: 0,
          name: 'Featured'
        },
        {
          id: 1,
          name: 'Low to high'
        },
        {
          id: 2,
          name: 'High to low'
        },
        {
          id: 3,
          name: 'A-Z'
        },
        {
          id: 4,
          name: 'Z-A'
        },
        {
          id: 5,
          name: 'Best selling'
        }
      ],
      selectedSortBy: {},
      showSelected: false,
      showSortBy: false
    }
  },
  mounted () {
    this.$nextTick(function () {
      if (window.removeEventListener) {
        window.addEventListener('resize', this.resizeEventFive)
        window.addEventListener('resize', this.resizeEventFour)
        window.addEventListener('resize', this.resizeEventThree)
      }
      this.resizeEventFive()
      this.resizeEventFour()
      this.resizeEventThree()
    })
  },
  beforeDestroy () {
    if (window.removeEventListener) {
      window.removeEventListener('resize', this.resizeEventFive)
      window.removeEventListener('resize', this.resizeEventFour)
      window.removeEventListener('resize', this.resizeEventThree)
    }
  },
  methods: {
    clickShowFive () {
      this.showFive = true
      this.showFour = false
      this.showThree = false
      this.showTwo = false
    },
    clickShowFour () {
      this.showFive = false
      this.showFour = true
      this.showThree = false
      this.showTwo = false
    },
    clickShowThree () {
      this.showFive = false
      this.showFour = false
      this.showThree = true
      this.showTwo = false
    },
    clickShowTwo () {
      this.showFive = false
      this.showFour = false
      this.showThree = false
      this.showTwo = true
    },
    resizeEventFive () {
      const clientWidth = window.innerWidth
      this.hideFive = clientWidth > 1550
      if (!this.hideFive) {
        this.showFive = false
        this.showFour = true
        this.showThree = false
        this.showTwo = false
      }
    },
    resizeEventFour () {
      const clientWidth = window.innerWidth
      this.hideFour = clientWidth > 1300
      if (!this.hideFour) {
        this.showFive = false
        this.showFour = false
        this.showThree = true
        this.showTwo = false
      }
    },
    resizeEventThree () {
      const clientWidth = window.innerWidth
      this.hideThree = clientWidth > 576
      if (!this.hideThree) {
        this.showFive = false
        this.showFour = false
        this.showThree = false
        this.showTwo = true
      }
    },
    selectedSort (sort) {
      this.selectedSortBy = sort
      this.showSelected = true
      this.showSortBy = false
    }
  }
}
</script>

<style lang="scss" scoped>
.filter-container {
  margin-bottom: 20px;
  background-color: $primary_color;
  padding: 20px;
  display: flex;
  align-items: center;
  @include tablet {
    padding: 10px 15px;
    @include mobile {
      flex-direction: column;
      align-items: baseline;
    }
  }
  .filter-text {
    margin-right: 20px;
    display: block;
    color: $secondary_color;
    font-size: 14px;
  }
  &__left {
    width: 50%;
    display: flex;
    align-items: center;
    @include mobile {
      width: 100%;
    }
    .show {
      cursor: pointer;
      border: thin solid $secondary_color;
      margin-right: 10px;
      opacity: 0.6;
      transition: 0.3s ease;
      &:last-child {
        margin-right: 0;
      }
      &:hover {
        opacity: 1;
      }
      &.active {
        opacity: 1;
      }
      &__inner {
        padding: 5px;
        display: flex;
        align-items: center;
        div {
          margin-right: 5px;
          width: 4px;
          height: 20px;
          background-color: $secondary_color;
          &:last-child {
            margin-right: 0;
          }
        }
      }
      &-three {
        @include mediumMobile {
          display: none;
        }
      }
      &-four {
        @media only screen and (max-width: 1300px) {
          display: none;
        }
      }
      &-five {
        @media only screen and (max-width: 1550px) {
          display: none;
        }
      }
    }
  }
  &__right {
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    @include mobile {
      margin-top: 20px;
      width: 100%;
      justify-content: flex-start;
    }
    .select {
      cursor: pointer;
      position: relative;
      background-color: $secondary_color;
      padding: 5px 30px 5px 10px;
      border: 1px solid $secondary_color;
      min-width: 90px;
      &:hover {
        &:after {
          color: $secondary_color;
          background-color: $primary_color;
        }
      }
      &:after {
        content: '\f078';
        font-family: 'Font Awesome 5 Free';
        font-weight: 900;
        color: $primary_color;
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        width: 30px;
        top: 0;
        right: 0;
        bottom: 0;
        transition: 0.3s ease;
      }
      span {
        display: block;
        font-size: 16px;
      }
    }
    .option {
      position: absolute;
      top: 34px;
      left: 0;
      right: 0;
      background: $secondary_color;
      border: thin solid $secondary_color;
      z-index: 1000;
      span {
        cursor: pointer;
        display: block;
        padding: 5px 10px;
        transition: 0.3s;
        &:hover {
          color: $secondary_color;
          background-color: $primary_color;
        }
      }
    }
  }
}
.product-container {
  display: flex;
  flex-wrap: wrap;
  &__two {
    width: calc(100% / 2 - 10px);
    height: 100%;
    margin-top: 20px;
    margin-right: 20px;
    &:nth-child(-n + 2) {
      margin-top: 0;
    }
    &:nth-child(2n + 2) {
      margin-right: 0;
    }
    @include smallMobile {
      width: 100%;
      margin-right: 0 !important;
      margin-top: 20px !important;
    }
    .product-image {
      display: block;
      width: calc(100% - 20px);
      min-height: 480px;
      max-height: 480px;
      object-fit: contain;
      @media only screen and (max-width: 1080px) {
        min-height: 380px;
        max-height: 380px;
        @include mediumMobile {
          min-height: 330px;
          max-height: 330px;
          @media only screen and (max-width: 480px) {
            min-height: 280px;
            max-height: 280px;
            @include smallMobile {
              min-height: initial;
              max-height: initial;
            }
          }
        }
      }
    }
  }
  &__three {
    width: calc(100% / 3 - 13.34px);
    height: 100%;
    margin-top: 20px;
    margin-right: 20px;
    &:nth-child(-n + 3) {
      margin-top: 0;
    }
    &:nth-child(3n + 3) {
      margin-right: 0;
    }
    .product-image {
      display: block;
      width: calc(100% - 20px);
      min-height: 380px;
      max-height: 380px;
      object-fit: contain;
      @media only screen and (max-width: 1300px) {
        min-height: 280px;
        max-height: 280px;
        @media only screen and (max-width: 1150px) {
          min-height: 230px;
          max-height: 230px;
          @include tablet {
            min-height: 280px;
            max-height: 280px;
            @include mobile {
              min-height: 230px;
              max-height: 230px;
            }
          }
        }
      }
    }
  }
  &__four {
    width: calc(100% / 4 - 15px);
    height: 100%;
    margin-top: 20px;
    margin-right: 20px;
    &:nth-child(-n + 4) {
      margin-top: 0;
    }
    &:nth-child(4n + 4) {
      margin-right: 0;
    }
    .product-image {
      display: block;
      width: calc(100% - 20px);
      min-height: 330px;
      max-height: 330px;
      object-fit: contain;
      @media only screen and (max-width: 1450px) {
        min-height: 280px;
        max-height: 280px;
      }
    }
  }
  &__five {
    width: calc(100% / 5 - 16px);
    height: 100%;
    margin-top: 20px;
    margin-right: 20px;
    &:nth-child(-n + 5) {
      margin-top: 0;
    }
    &:nth-child(5n + 5) {
      margin-right: 0;
    }
    .product-image {
      display: block;
      width: calc(100% - 20px);
      min-height: 280px;
      max-height: 280px;
      object-fit: contain;
    }
  }
  .product-box {
    &__inner {
      color: $primary_color;
      &:hover {
        .product-image {
          filter: blur(3px);
          @include tablet {
            filter: none;
          }
        }
        .addCart {
          &.absolute {
            transform: translateY(0px);
          }
        }
      }
      .product-link {
        display: block;
        cursor: pointer;
        text-decoration: none;
      }
    }
    &__text {
      padding: 10px;
      text-align: center;
      @include fontSemiBold;
      .price {
        display: block;
        margin-top: 10px;
        font-size: 16px;
        @include fontBold;
        @include mobile {
          font-size: 14px;
        }
      }
    }
    .product-image {
      padding: 10px;
      transition: 0.3s ease;
    }
    .wishlist {
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 40px;
      height: 40px;
      position: absolute;
      top: 15px;
      right: 15px;
      z-index: 1;
      background: $secondary_color;
      box-shadow: 0 0 10px 0 rgba(0,0,0,0.1);
      border-radius: 40px;
      &:hover {
        i {
          color: $red;
        }
      }
      &.active {
        i {
          color: $red;
        }
      }
      i {
        font-size: 19px;
        color: $primary_color;
        transition: 0.3s ease;
      }
    }
    .addCart {
      &.absolute {
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 1;
        transform: translateY(50px);
        transition: 0.3s ease;
      }
      &.desktop {
        @include tablet {
          display: none;
        }
      }
      &.mobile {
        display: none;
        margin-top: 20px;
        @include tablet {
          display: block;
        }
      }
    }
  }
}
</style>
