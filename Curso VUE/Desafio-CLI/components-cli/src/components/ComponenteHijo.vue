<template>
  <div>
      <h1 :style='miEstilo'>{{msg}}</h1>
  </div>
</template>

<script>
export default{
    name: 'ComponenteHijo',
    data(){
        return{
            msg: 'Saludos desde componente hijo'
        }
    },
    props: ['array','miEstilo']
}
</script>

<style lang="scss" scoped>
    h1{
        background-color: red;
    }
</style>
