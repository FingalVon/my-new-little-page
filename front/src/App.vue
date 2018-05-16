<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: 'App',
    mounted() {
      window.onresize = function windowResize () {
        let ih = window.innerHeight;
        let fs = (ih > 700 ? 14 : (ih > 500 ? 12 : 10)) + 'px';
        document.getElementsByTagName('html')[0].style.fontSize = fs;
      }
    }
  }
</script>

<style>
@import "./css/index.css";
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
