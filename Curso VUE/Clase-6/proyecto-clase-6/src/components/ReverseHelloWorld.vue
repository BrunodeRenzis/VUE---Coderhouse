<template>
  <div class="hello">
    <h1>{{ msg.split('').reverse().join('') }}</h1>    
  </div>
</template>

<script>
import message from '../mixins/message.js'
export default {
  name: 'ReverseHelloWorld',
  mixins:[message],
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
