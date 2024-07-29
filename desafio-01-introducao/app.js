
new Vue({
    el: '#desafio',
    data: {
        nome: 'Clarissa',
        idade: 20,
        fotoGatinho: 'https://petitgato.com.br/img/webp/gatos-persas-em-sao-paulo-img-3780.webp'
    },
    methods: {
       numeroRandomico(){
           return Math.random(0,1)
       }
    }
})