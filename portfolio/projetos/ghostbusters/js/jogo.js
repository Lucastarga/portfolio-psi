
let altura = 0;
let largura = 0;
let vidas = 1;
let tempo = 15;
let intervaloCriaFantasma;

let nivel = window.location.search
nivel = nivel.replace('?', '')

if (nivel === 'facil') {
	intervaloCriaFantasma = 1500
} else if (nivel === 'normal') {
	intervaloCriaFantasma = 1000
} else if (nivel === 'dificil') {
	intervaloCriaFantasma = 750
}

function ajustaTela() {
	altura = window.innerHeight
	largura = window.innerWidth
}
ajustaTela()

let cronometro = setInterval(function () {

	tempo -= 1

	if (tempo < 0) {
		clearInterval(cronometro);
		clearInterval(criaFantasma);
		window.location.href = 'vitoria.html';
	} else {
		document.getElementById('cronometro').innerHTML = tempo
	}

}, 1000)


function posicaoRandomica() {
	//remove o mosquito anterior (caso exista)
	if (document.getElementById('fantasma')) {
		document.getElementById('fantasma').remove()

		if (vidas > 3) {
			window.location.href = 'derrota.html'
		} else {
			document.getElementById('v' + vidas).src = "./image/coracao-vazio.png"
			vidas++
		}
	}

	let posicaoX = Math.floor(Math.random() * largura) - 90
	let posicaoY = Math.floor(Math.random() * altura) - 90
	posicaoX = posicaoX < 0 ? 0 : posicaoX
	posicaoY = posicaoY < 0 ? 0 : posicaoY


	//criar o elemento html

	let fantasma = document.createElement('div');
	fantasma.className = tamanhoAleatorio() + ' ' + inverteFantasma();
	fantasma.style.left = posicaoX + 'px';
	fantasma.style.top = posicaoY + 'px';
	fantasma.style.position = 'absolute';
	fantasma.style.overflow = 'hidden';
	fantasma.id = 'fantasma';
	fantasma.onclick = function () {
		this.remove();
		contadorFantasmas += 1;
	}

	document.body.appendChild(fantasma)

}

function tamanhoAleatorio() {
	let classe = Math.floor(Math.random() * 3)

	switch (classe) {
		case 0:
			return 'fantasma-1'

		case 1:
			return 'fantasma-2'

		case 2:
			return 'fantasma-3'
	}
}

function inverteFantasma() {
	let classe = Math.floor(Math.random() * 2)

	switch (classe) {
		case 0:
			return 'invert-false'

		case 1:
			return 'invert-true'
	}
}


//controle do painel de vidas e cronometro//
document.getElementById('cronometro').innerHTML = tempo

let criaFantasma = setInterval(function () {
	posicaoRandomica()
}, intervaloCriaFantasma);

function iniciarJogo() {
	let nivel = document.getElementById('nivel').value
	const div_alert = document.querySelector('#alert');

	if (nivel === '') {
		div_alert.style.display = 'block';
		return false
	}

	window.location.href = "app.html?" + nivel
}

