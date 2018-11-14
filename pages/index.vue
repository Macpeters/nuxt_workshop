<template>
  <div>
    <h1>Hello world!</h1>
    <ul>
      <li>
        <nuxt-link to="/projects">Projects</nuxt-link>
      </li>
      <li>
        <nuxt-link to="/blog">Blog</nuxt-link>
      </li>
      <li>
        <nuxt-link to="/team">Team</nuxt-link>
      </li>
      <li>
        <nuxt-link to="/contact">Contact</nuxt-link>
      </li>
    </ul>
  </div>
</template>

<style>
.page-enter-active, .page-leave-active {
  transition: opacity .5s;
}
.page-enter, .page-leave-to {
  opacity: 0;
}
</style>
