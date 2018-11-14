<template>
  <div>
    <n-navbar/>
    <b-container>
      <nuxt/>
    </b-container>
  </div>
</template>

<script>
import nNavbar from '@/components/navbar'

export default {
  components: {
    nNavbar
  }
}
</script>

<style>
.page-enter-active, .page-leave-active {
  transition: opacity .5s;
}
.page-enter, .page-leave-to {
  opacity: 0;
}
</style>
