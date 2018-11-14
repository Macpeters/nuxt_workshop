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
  },
  async asyncData({ app }) {
    let team = await app.$axios.$get('/api/team.json')
    return { team }
  }
  // async asyncData() {
    // var xhr = new XMLHttpRequest()
    // var self = this
    // xhr.open('GET', 'http://localhost:3000/api/team.json')
    // xhr.onload = function () {
    //   console.log(JSON.parse(xhr.responseText))
    // }
    // xhr.send()
  // }
}
</script>
