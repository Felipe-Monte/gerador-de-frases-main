
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

btn.addEventListener('click', add);

function add() {
	let random = Math.floor(Math.random() * quotes.length);
	quote.innerHTML = quotes[random].quote;
}