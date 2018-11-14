<template>
  <div>
    <h1>Blog</h1>
    <p>This is an example of a Basic Route within a folder made with Nuxt</p>
    <ul>
      <li>
        <nuxt-link to="/blog/a">Article A</nuxt-link>
      </li>
      <li>
        <nuxt-link to="/blog/b">Article B</nuxt-link>
      </li>
      <li>
        <nuxt-link to="/blog/c">Article C</nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  head () {
    return {
      title: 'Blog',
      meta: [
        { hid: 'description', name: 'description', content: 'Discover our articles' }
      ]
    }
  }}
</script>
