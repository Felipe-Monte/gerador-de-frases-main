
const quotes = [{
	quote: `"Deus te ama"`
}, {
	quote: `"Faça uma oração hoje"`
}, {
	quote: `"Leia a biblia"`
}, {
	quote: `"Seja bom"`
}, {
	quote: `"Cante um hino"`
}, {
	quote: `"Poste uma msg biblica"`
}, {
	quote: `"Dê testemunhos"`
}, {
	quote: `"Leve a palavra de deus as pessoas"`
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


