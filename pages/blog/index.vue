<template>
  <div>
    <h1>Blog</h1>
    <p>This is an example of a Basic Route within a folder made with Nuxt</p>
    <b-list-group>
      <b-list-group-item to="/blog/a">Article A</b-list-group-item>
      <b-list-group-item to="/blog/b">Article B</b-list-group-item>
      <b-list-group-item to="/blog/c">Article C</b-list-group-item>
    </b-list-group>
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
