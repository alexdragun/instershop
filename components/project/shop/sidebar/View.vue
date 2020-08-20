<template>
  <div class="sidebar">
    <div class="sidebar__inner">
      <h5 class="category-title">
        CATEGORIES
      </h5>
      <div class="sub-category">
        <div class="flex align-center justify-between">
          <nuxt-link
            class="category-link"
            to="/shop/zene/odjeca"
          >
            Odjeća
          </nuxt-link>
          <div
            class="category-expand"
            :class="{ 'category-expand__active' : el === 0 }"
            @click="expandCategory(0)"
          >
            <span />
            <span />
          </div>
        </div>
        <ul
          v-if="0 === el"
          class="category-list"
        >
          <li>
            <nuxt-link to="/shop/zene/odjeca/majice">
              Majice
              <span>(10)</span>
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/shop/zene/odjeca/duskerice">
              Dukserice
              <span>(10)</span>
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/shop/zene/odjeca/sorcevi">
              Šorcevi
              <span>(10)</span>
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/shop/zene/odjeca/tajice">
              Tajice
              <span>(10)</span>
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/shop/zene/odjeca/hlace">
              Hlače
              <span>(10)</span>
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/shop/zene/odjeca/suknje">
              Suknje
              <span>(10)</span>
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/shop/zene/odjeca/haljine">
              Haljine
              <span>(10)</span>
            </nuxt-link>
          </li>
        </ul>
      </div>
      <div class="sub-category">
        <div class="flex align-center justify-between">
          <nuxt-link
            class="category-link"
            to="/shop/zene/nakit"
          >
            Nakit
          </nuxt-link>
          <div
            class="category-expand"
            :class="{ 'category-expand__active' : el === 1 }"
            @click="expandCategory(1)"
          >
            <span />
            <span />
          </div>
        </div>
        <ul
          v-if="1 === el"
          class="category-list"
        >
          <li>
            <nuxt-link to="/shop/zene/nakit/nausnice">
              Naušnice
              <span>(10)</span>
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/shop/zene/nakit/lancici">
              Lančići
              <span>(10)</span>
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/shop/zene/nakit/narukvice">
              Narukvice
              <span>(10)</span>
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/shop/zene/nakit/prstenje">
              Prstenje
              <span>(10)</span>
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/shop/zene/nakit/satovi">
              Satovi
              <span>(10)</span>
            </nuxt-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      el: 0
    }
  },
  methods: {
    expandCategory (index) {
      if (this.el === index) {
        this.el = 0
      } else {
        this.el = index
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.sidebar {
  width: 250px;
  min-width: 250px;
  max-width: 250px;
  margin-right: 40px;
  &__inner {
    .category-title {
      padding-bottom: 10px;
      border-bottom: 1px solid $light_grey;
    }
    .sub-category {
      margin-top: 20px;
    }
  }
}
</style>
