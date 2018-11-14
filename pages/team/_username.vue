<template>
  <div>
    <h2>{{ $route.params.username }}</h2>
  </div>
</template>

<script>
export default {
  head () {
    return {
      title: `Team - ${this.$route.params.username}`,
      meta: [
        { hid: 'description', name: 'description', content: `Discover our team member ${this.$route.params.username}` }
      ]
    }
  }}
</script>
