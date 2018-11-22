<template>
  <div>
    <h1>Contact</h1>
    <h2>somewhere@email.com</h2>

    <div>
      <div>
        <div>hardcoded: <img src="~/assets/picture.png"></div>
        <div>variable: <img v-bind:src="pupsicle" /></div>
      </div>
    </div>

  </div>
</template>

<script>
import pupsicle from "../assets/picture.png";

export default {
  data() {
    return {
      pupsicle: pupsicle
    }
  },
  head () {
    return {
      title: 'Contact',
      meta: [
        { hid: 'description', name: 'description', content: 'Discover how to get in touch' }
      ],
      image: {
        url: "~/assets" + "picture.png"
      }
    }
  },
  mounted() {
    // using a plugin
    this.$myInjectedFunction('plugged in!')
  }}
</script>

<style>
  img {
    width: 200px;
    height: 200px;
  }
</style>
