<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  },
  mounted() {
    console.log(this.$_.map([1,2,3], function (e){
      return e
    }), "its this")
  }
}
</script>

<style scoped lang="scss">
body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  a{
    text-decoration: none;
    margin: 0;
    padding: 0;
  }
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
