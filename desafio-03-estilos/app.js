new Vue({
	el: '#desafio',
	data: {
		primeiraClasse: '',
		padrao: 'padrao',
		classeDigitada: '',
		classeDigitada2: '',
		perigo: true,
		classeDigitada3: '',
		progresso: 0

	},
	methods: {
		iniciarEfeito() {
			this.primeiraClasse = 'destaque'
			setInterval(() => {
				this.primeiraClasse = this.primeiraClasse === 'destaque' ? 'encolher' : 'destaque'
			}, 1000)

		},
		verificaClasse(e) {
			if (e.target.value === 'true') {
				this.perigo = true
			} else if (e.target.value === 'false') {
				this.perigo = false
				console.log('false')
			}
		},
		iniciarProgresso() {
			let contador = 0;

			const temporizador = setInterval(() => {
				contador += 25
				this.progresso = contador
				console.log(contador)
				if (contador >= 100) {
					clearInterval(temporizador)
				}
			}, 1000)
		}
	}
})


