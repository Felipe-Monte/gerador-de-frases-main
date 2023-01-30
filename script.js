
const quotes = [{
	quote: `"Quem fica de joelhos diante de Deus, fica de pé diante de qualquer coisa."`
}, {
	quote: `"Não importa quantos obstáculos vou encontrar, pois Deus segue na minha frente abrindo caminho."`
}, {
	quote: `"A melhor maneira que o homem dispõe para se aperfeiçoar, é aproximar-se de Deus."`
}, {
	quote: `"Tem coisas que Deus dá para a gente aprender. E tem coisas que Deus só dá quando a gente aprende."`
}, {
	quote: `"Às vezes, Deus te leva pelo caminho mais longo, não para te punir, mas sim para te preparar."`
}, {
	quote: `"Quando a última coisa que você tiver for Deus, você vai descobrir que Ele era a única coisa que você precisava ter."`
}, {
	quote: `"Nas horas em que nos sentimos perdidos, é quando a confiança em Deus não pode falhar."`
}, {
	quote: `"Deus nunca perturba a alegria dos seus filhos se não for para lhes preparar uma mais certa e maior."`
},
]

const btn = document.querySelector('button');
const quote = document.querySelector('span')
var count = 0;

btn.addEventListener('click', add);

function add() {
	count++;
	if (count > 2) {
		alert('Limite excedido ! Volte amanhã ☺')
		return
	} else {
		let random = Math.floor(Math.random() * quotes.length);
		quote.innerHTML = quotes[random].quote;
	}

}


