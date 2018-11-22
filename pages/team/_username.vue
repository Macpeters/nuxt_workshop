<template>
  <div>
    <h2>{{ $route.params.username }}</h2>
    <div>
      <div>Fullname: {{user.Fullname}}</div>
      <div>Description: {{user.description}}</div>
      <br />
      <div>User Record: {{user}}</div>
    </div>
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
  async asyncData({ app, params, error }) {
    let team = await app.$axios.$get('/api/team.json')
    let user = team.find((user) => user.slug == params.username)
    if(params.username && !user) {
      return error({statusCode: 404, message: 'no user'})
    }
    return { user }

  }
}
</script>
