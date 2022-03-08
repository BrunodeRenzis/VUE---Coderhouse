<template>
         <div>
            <h1>{{message}}</h1>
        </div>
</template>

<script>
export default {
    name: 'ComponentePadre',
    data(){
        return{
            message: "Saludos desde componente padre"
        }
    }
}
</script>

<style>

</style>