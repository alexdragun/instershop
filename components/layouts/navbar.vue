<template>
  <div>
    <div class="desktop-navigation">
      <desktopNavigation />
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
  }
}
</script>
