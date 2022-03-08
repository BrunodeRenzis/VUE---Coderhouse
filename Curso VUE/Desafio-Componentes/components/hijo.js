Vue.component('hijo',{
    template: 
    `
        <table :style='miEstilo'>
            <tr v-for="num in array">
                <td>
                    {{num}}
                </td>
            </tr>
        </table>
    `,
    props:['array','miEstilo']
});