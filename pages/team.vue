<template>
  <div>
    <div><nuxt-link to="/">HOME</nuxt-link></div>
    <h1>Team</h1>
    <ul>
      <li>
        <nuxt-link to="/team/a">Alexandre</nuxt-link>
      </li>
      <li>
        <nuxt-link to="/team/b">Sebastien</nuxt-link>
      </li>
    </ul>
    <nuxt-child v-if="$route.params.username"/>
  </div>
</template>
