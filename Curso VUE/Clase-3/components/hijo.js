Vue.component('hijo',{
    template: 
    `
        <section>
            <h4>Componente hijo</h4>
            <h5>{{numero}}</h5>
            <p>{{nombre}}</p>
        </section>
    `,
    props:['numero'],
    data(){
        return{
            nombre:'Bruno de Renzis'
        }
    }
})