<template>
  <div>
    <h1>Team</h1>
    <ul>
      <li>
        <nuxt-link to="/team/alexandre">Alexandre</nuxt-link>
      </li>
      <li>
        <nuxt-link to="/team/sebastien">Sebastien</nuxt-link>
      </li>
    </ul>
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
