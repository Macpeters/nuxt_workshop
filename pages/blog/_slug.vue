<template>
  <div>
    <h1>Article: {{ $route.params.slug }} </h1>
    <p>This is an example of a Dynamic Route made with Nuxt</p>
  </div>
</template>

<script>
export default {
  head () {
    return {
      title: `Blog - ${this.$route.params.slug}`,
      meta: [
        { hid: 'description', name: 'description', content: 'Discover our article' }
      ]
    }
  }}
</script>
