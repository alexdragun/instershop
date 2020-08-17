<template>
  <div>
    <div v-if="isDesktop" class="desktop-navigation">
      <desktopNavigation :category="category" />
    </div>
    <div v-else class="responsive-navigation">
      <responsiveNavigation />
    </div>
  </div>
</template>

<script>
import desktopNavigation from '@/components/layouts/navigation/desktop'
import responsiveNavigation from '@/components/layouts/navigation/mobile'
export default {
  components: {
    desktopNavigation,
    responsiveNavigation
  },
  data () {
    return {
      isDesktop: false,
      desktopNav: false,
      isMobile: false,
      mobileNav: false,
      category: [
        {
          id: 1,
          categoryName: 'Žene',
          subCategory: [
            {
              id: 1,
              subCategoryName: 'Odjeća',
              subCategoryList: [
                {
                  id: 1,
                  listName: 'Majice'
                },
                {
                  id: 2,
                  listName: 'Dukserice'
                },
                {
                  id: 3,
                  listName: 'Šorcevi'
                },
                {
                  id: 4,
                  listName: 'Tajice'
                },
                {
                  id: 5,
                  listName: 'Hlače'
                },
                {
                  id: 6,
                  listName: 'Suknje'
                },
                {
                  id: 7,
                  listName: 'Haljine'
                }
              ]
            },
            {
              id: 2,
              subCategoryName: 'Nakit',
              subCategoryList: [
                {
                  id: 1,
                  listName: 'Naušnice'
                },
                {
                  id: 2,
                  listName: 'Lančići'
                },
                {
                  id: 3,
                  listName: 'Narukvice'
                },
                {
                  id: 4,
                  listName: 'Prstenje'
                },
                {
                  id: 5,
                  listName: 'Satovi'
                }
              ]
            }
          ]
        },
        {
          id: 2,
          categoryName: 'Muškarci',
          subCategory: [
            {
              id: 1,
              subCategoryName: 'Odjeća',
              subCategoryList: [
                {
                  id: 1,
                  listName: 'Majice'
                },
                {
                  id: 2,
                  listName: 'Dukserice'
                },
                {
                  id: 3,
                  listName: 'Šorcevi'
                },
                {
                  id: 4,
                  listName: 'Hlače'
                }
              ]
            },
            {
              id: 2,
              subCategoryName: 'Nakit',
              subCategoryList: [
                {
                  id: 1,
                  listName: 'Naušnice'
                },
                {
                  id: 2,
                  listName: 'Lančići'
                },
                {
                  id: 3,
                  listName: 'Narukvice'
                },
                {
                  id: 4,
                  listName: 'Prstenje'
                },
                {
                  id: 5,
                  listName: 'Satovi'
                }
              ]
            }
          ]
        },
        {
          id: 3,
          categoryName: 'Djeca',
          subCategory: [
            {
              id: 1,
              subCategoryName: 'Odjeća',
              subCategoryList: [
                {
                  id: 1,
                  listName: 'Majice'
                },
                {
                  id: 2,
                  listName: 'Dukserice'
                },
                {
                  id: 3,
                  listName: 'Šorcevi'
                },
                {
                  id: 4,
                  listName: 'Tajice'
                },
                {
                  id: 5,
                  listName: 'Hlače'
                },
                {
                  id: 6,
                  listName: 'Suknje'
                },
                {
                  id: 7,
                  listName: 'Haljine'
                }
              ]
            },
            {
              id: 2,
              subCategoryName: 'Nakit',
              subCategoryList: [
                {
                  id: 1,
                  listName: 'Naušnice'
                },
                {
                  id: 2,
                  listName: 'Lančići'
                },
                {
                  id: 3,
                  listName: 'Narukvice'
                },
                {
                  id: 4,
                  listName: 'Prstenje'
                },
                {
                  id: 5,
                  listName: 'Satovi'
                }
              ]
            }
          ]
        },
        {
          id: 4,
          categoryName: 'Akcija',
          subCategory: []
        }
      ]
    }
  },
  mounted () {
    this.$nextTick(function () {
      if (window.removeEventListener) {
        window.addEventListener('resize', this.desktopAndMobileNav)
      }
      this.desktopAndMobileNav()
    })
  },
  methods: {
    desktopAndMobileNav () {
      const clientWidth = window.innerWidth
      this.isDesktop = clientWidth > 1024
      if (!this.isDesktop) {
        this.desktopNav = false
      }
    }
  }
}
</script>
