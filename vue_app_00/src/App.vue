<template>
  <div id="app">
    <!-- <img src="./assets/logo.png">-->
    <router-view/> 
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
  
}
*{padding:0;margin:0;}
a{
  text-decoration: none;
  color:#5e5e5c;
}
img{
  vertical-align: middle;
  border:none;
}
ul{list-style:none;}
</style>
