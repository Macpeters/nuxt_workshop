<template>
  <div>
    <h1>Team</h1>
    <b-nav>
      <b-nav-item to="/team/alexandre">Alexandre</b-nav-item>
      <b-nav-item to="/team/sebastien">Sebastien</b-nav-item>
    </b-nav>
    <nuxt-child v-if="$route.params.username"/>
  </div>
</template>

<script>
export default {
  head () {
    return {
      title: 'Team',
      meta: [
        { hid: 'description', name: 'description', content: 'Discover our team' }
      ]
    }
  }}
</script>
