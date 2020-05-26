const lolcatjs = require('lolcatjs');
const quote = require('inspirational-quotes');
const cowsay = require('cowsay');

const myQuote = quote.getRandomQuote();

let newQuote = "";
let array = myQuote.split(" ");
for(let i = 0; i < array.length; i++) {
	if(i != 0) {
		if (i%5 == 0){
			newQuote += "\n";
		}
	}
	newQuote += array[i] + " ";
}
// console.log(newQuote);

lolcatjs.options.seed = Math.round(Math.random() * 1000);
lolcatjs.options.colors = true;

lolcatjs.fromString(cowsay.say({
	text : newQuote,
	e : "oO",
	T : "U "
}));



