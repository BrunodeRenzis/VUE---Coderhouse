<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld :msg="msg"></HelloWorld>
    <product-table></product-table>
    <reverse-hello-world :msg="msg"></reverse-hello-world>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import ProductTable from './components/productTable.vue'
import ReverseHelloWorld from './components/ReverseHelloWorld.vue'


export default {
  name: 'App',
  components: {
    HelloWorld,
    ProductTable,
    ReverseHelloWorld
  },
  data(){
      return{
          msg: 'Join the navy'
      }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
