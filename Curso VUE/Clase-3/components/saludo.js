Vue.component('saludo',{
    template: 
    `
        <section>
            <h1>{{saludo}}</h1>
            <p>Soy hacker</p>
        </section>
    `,
    data(){
        return {
            saludo: 'Adios Mundo'
        }
    }
})
