<template>
  <div>
    <div class="desktop-navigation">
      <desktopNavigation :category="category" />
    </div>
    <div class="responsive-navigation">
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
      category: [
        {
          id: 1,
          categoryName: 'Žene',
          categoryLink: '/shop/zene',
          subCategory: [
            {
              id: 1,
              subCategoryName: 'Odjeća',
              subCategoryLink: '/shop/zene/odjeca',
              subCategoryList: [
                {
                  id: 1,
                  listName: 'Majice',
                  listLink: '/shop/zene/odjeca/majice'
                },
                {
                  id: 2,
                  listName: 'Dukserice',
                  listLink: '/shop/zene/odjeca/dukserice'
                },
                {
                  id: 3,
                  listName: 'Šorcevi',
                  listLink: '/shop/zene/odjeca/sorcevi'
                },
                {
                  id: 4,
                  listName: 'Tajice',
                  listLink: '/shop/zene/odjeca/tajice'
                },
                {
                  id: 5,
                  listName: 'Hlače',
                  listLink: '/shop/zene/odjeca/hlace'
                },
                {
                  id: 6,
                  listName: 'Suknje',
                  listLink: '/shop/zene/odjeca/suknje'
                },
                {
                  id: 7,
                  listName: 'Haljine',
                  listLink: '/shop/zene/odjeca/haljine'
                }
              ]
            },
            {
              id: 2,
              subCategoryName: 'Nakit',
              subCategoryLink: '/shop/zene/nakit',
              subCategoryList: [
                {
                  id: 1,
                  listName: 'Naušnice',
                  listLink: '/shop/zene/nakit/nausnice'
                },
                {
                  id: 2,
                  listName: 'Lančići',
                  listLink: '/shop/zene/nakit/lancici'
                },
                {
                  id: 3,
                  listName: 'Narukvice',
                  listLink: '/shop/zene/nakit/narukvice'
                },
                {
                  id: 4,
                  listName: 'Prstenje',
                  listLink: '/shop/zene/nakit/prstenje'
                },
                {
                  id: 5,
                  listName: 'Satovi',
                  listLink: '/shop/zene/nakit/satovi'
                }
              ]
            }
          ]
        },
        {
          id: 2,
          categoryName: 'Muškarci',
          categoryLink: '/shop/muskarci',
          subCategory: [
            {
              id: 1,
              subCategoryName: 'Odjeća',
              subCategoryLink: '/shop/muskarci/odjeca',
              subCategoryList: [
                {
                  id: 1,
                  listName: 'Majice',
                  listLink: '/shop/muskarci/odjeca/majice'
                },
                {
                  id: 2,
                  listName: 'Duksevi',
                  listLink: '/shop/muskarci/odjeca/duksevi'
                },
                {
                  id: 3,
                  listName: 'Šorcevi',
                  listLink: '/shop/muskarci/odjeca/sorcevi'
                },
                {
                  id: 4,
                  listName: 'Hlače',
                  listLink: '/shop/muskarci/odjeca/hlace'
                }
              ]
            },
            {
              id: 2,
              subCategoryName: 'Nakit',
              subCategoryLink: '/shop/muskarci/nakit',
              subCategoryList: [
                {
                  id: 1,
                  listName: 'Naušnice',
                  listLink: '/shop/muskarci/nakit/nausnice'
                },
                {
                  id: 2,
                  listName: 'Lančići',
                  listLink: '/shop/muskarci/nakit/lancici'
                },
                {
                  id: 3,
                  listName: 'Narukvice',
                  listLink: '/shop/muskarci/nakit/narukvice'
                },
                {
                  id: 4,
                  listName: 'Prstenje',
                  listLink: '/shop/muskarci/nakit/prstenje'
                },
                {
                  id: 5,
                  listName: 'Satovi',
                  listLink: '/shop/muskarci/nakit/satovi'
                }
              ]
            }
          ]
        },
        {
          id: 3,
          categoryName: 'Djeca',
          categoryLink: '/shop/djeca',
          subCategory: [
            {
              id: 1,
              subCategoryName: 'Odjeća',
              subCategoryLink: '/shop/djeca/odjeca',
              subCategoryList: [
                {
                  id: 1,
                  listName: 'Majice',
                  listLink: '/shop/djeca/odjeca/majice'
                },
                {
                  id: 2,
                  listName: 'Dukserice',
                  listLink: '/shop/djeca/odjeca/dukserice'
                },
                {
                  id: 3,
                  listName: 'Duksevi',
                  listLink: '/shop/djeca/odjeca/duksevi'
                },
                {
                  id: 4,
                  listName: 'Šorcevi',
                  listLink: '/shop/djeca/odjeca/sorcevi'
                },
                {
                  id: 5,
                  listName: 'Tajice',
                  listLink: '/shop/djeca/odjeca/tajice'
                },
                {
                  id: 6,
                  listName: 'Hlače',
                  listLink: '/shop/djeca/odjeca/hlace'
                },
                {
                  id: 7,
                  listName: 'Suknje',
                  listLink: '/shop/djeca/odjeca/suknje'
                },
                {
                  id: 8,
                  listName: 'Haljine',
                  listLink: '/shop/djeca/odjeca/haljine'
                }
              ]
            },
            {
              id: 2,
              subCategoryName: 'Nakit',
              subCategoryLink: '/shop/djeca/nakit',
              subCategoryList: [
                {
                  id: 1,
                  listName: 'Naušnice',
                  listLink: '/shop/djeca/nakit/nausnice'
                },
                {
                  id: 2,
                  listName: 'Lančići',
                  listLink: '/shop/djeca/nakit/lancici'
                },
                {
                  id: 3,
                  listName: 'Narukvice',
                  listLink: '/shop/djeca/nakit/narukvice'
                },
                {
                  id: 4,
                  listName: 'Satovi',
                  listLink: '/shop/djeca/nakit/satovi'
                }
              ]
            }
          ]
        },
        {
          id: 4,
          categoryName: 'Akcija',
          categoryLink: '/akcija',
          subCategory: []
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
  .desktop-navigation {
    @include tablet {
      display: none;
    }
  }
  .responsive-navigation {
    display: none;
    @include tablet {
      display: block;
    }
  }
</style>
