Vue.component('padre',{
    template: 
    `
        <section>
            <h4>Componente Padre</h4>
            <!--props para comunicación entre componentes-->
            <!--<hijo numero='16'></hijo>-->
            <hijo :numero="numeroPadre"></hijo>
            <button @click=numeroPadre++>+</button>
            <input v-model="numeroPadre"></input>
        </section>
    `,
    data(){
        return{
            numeroPadre:0
        }
    }
})