<template>
  <div>
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
  },
  head () {
    return {
      title: 'Projects',
      meta: [
        { hid: 'description', name: 'description', content: 'Discover our projects' }
      ]
    }
  }}
</script>

