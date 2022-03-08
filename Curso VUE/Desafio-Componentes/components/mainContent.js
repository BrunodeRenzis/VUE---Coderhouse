Vue.component('main-content',{
    template: 
    `
        <div>
            <div v-for="persona in personas">
                <h1>{{persona.nombre}}</h1>
            </div>
        </div>
    `,
    props:['personas']
});