<template>
  <div id="app">
    <h1>Vue Chat App</h1>
    <p>Just a simple realtime chat application</p>
    <div id="nav">
      <router-link to="/">Home</router-link> |
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
    name: 'App',
    components: {}
}
</script>

<style>
</style>
