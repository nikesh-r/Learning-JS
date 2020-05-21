/* 

************ USAGE ************

const giveMeAJoke = require('give-me-a-joke');

// To get a random dad joke
giveMeAJoke.getRandomDadJoke(function(joke) {
    console.log(joke);
});

// To get a random Chuck Norris joke
giveMeAJoke.getRandomCNJoke(function(joke) {
    console.log(joke);
});

var fn = "Jackie";
var ln = "Chan";
giveMeAJoke.getCustomJoke (fn, ln, function(joke) {
    //=> console.log(joke);
});

// To get a random Joke of the Day (Categories allowed: "blonde", "knock-knock", "animal", "jod")
var category = "blonde";
giveMeAJoke.getRandomJokeOfTheDay (category, function(joke) {
    //=> console.log(joke);
});

***************************************

*/



const giveMeAJoke = require('give-me-a-joke'); 

const randomNumber = () => {
    return Math.floor(Math.random() * 2);
    
}

const dadJoke = () => {
    console.log("Dad Joke:");
    giveMeAJoke.getRandomDadJoke(function(joke) {
        console.log(joke);
    });
}

// To get a random Chuck Norris joke
const CNJoke = () => {
    console.log("Chuck Norris Joke:");
    giveMeAJoke.getRandomCNJoke(function(joke) {
        console.log(joke);
    });
}

const customJoke = () => {
    console.log("Custom Joke:");
    let fn = "Jackie";
    let ln = "Chan";
    giveMeAJoke.getCustomJoke (fn, ln, function(joke) {
        console.log(joke);
    });
}

// To get a random Joke of the Day (Categories allowed: "blonde", "knock-knock", "animal", "jod")
const jokeOfDay = () => {
    console.log("Joke of the Days:");
    let type = "animal";
    giveMeAJoke.getRandomJokeOfTheDay (type, function(joke) {
        console.log(joke);
    });
}

const category = randomNumber();
const categories = [dadJoke, jokeOfDay];
console.log(":: Random Joke Generator ::");
categories[category]();

// dadJoke();
// CNJoke();
// customJoke();
// jokeOfDay();