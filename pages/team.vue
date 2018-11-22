<template>
  <div>
    <h1>Team</h1>
    <b-nav>
      <b-nav-item to="/team/mac">Mac</b-nav-item>
      <b-nav-item to="/team/keith">Keith</b-nav-item>
      <b-nav-item to="/team/sergiy">Sergiy</b-nav-item>
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
