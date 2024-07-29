new Vue({
    el: '#desafio',
    data: {
        valor: ''
    },
    methods:{
        exibirAlerta(){
            alert('Apertou o alerta')
        },
        armazenaValor(event){
            this.valor = event.target.value
        }
    }
})