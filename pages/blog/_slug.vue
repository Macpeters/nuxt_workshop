<template>
  <div>
    <div><nuxt-link to="/">HOME </nuxt-link></div>
    <div><nuxt-link to="/blog"> BLOG</nuxt-link></div>
    <h1>Article: {{ $route.params.slug }} </h1>
    <p>This is an example of a Dynamic Route made with Nuxt</p>
  </div>
</template>
