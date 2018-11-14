<template>
  <div>
    <div><nuxt-link to="/">HOME</nuxt-link></div>
    <h1>Projects</h1>
    <p>This is an example of a page available only on client-side with Nuxt</p>
  </div>
</template>

<script>
export default {
  middleware: ({ redirect }) => {
    if (process.server) {
      return redirect('/')
    }
  }
}
</script>
