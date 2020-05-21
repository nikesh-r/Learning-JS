/*
----------------- USAGE ----------------

const yoMamma = require('yo-mamma').default;
let insult;

// get random joke
insult = yoMamma(); 

// get specific joke
insult = yoMamma(1); 

//Yo mama is so old that she knew Burger King while he was still a prince.
console.log(insult);

-------------------------------------------
*/

const yoMama = require('yo-mamma').default;
const fs = require('fs');

let allJokes;

const initialiseJokes = () => {
    try {
        allJokes = JSON.parse(fs.readFileSync("outputJokes.json", "utf8"));
    }
    catch(err) {
        allJokes = [];
    }
}

const writeJokesInFile = () => {
    let jsonContent = JSON.stringify(allJokes, null, 2);
    fs.writeFileSync("outputJokes.json", jsonContent);
}

const showRandomJoke = () => {
    console.log(yoMama());
}

const showJokeByNum = (num) => {
    console.log(yoMama(num));
}

const showSavedJokes = () => {
    initialiseJokes();
    if (allJokes.length == 0) {
        console.log("No saved jokes!");
    } else {
        console.log("All Saved Jokes:");
        for (let i = 0; i < allJokes.length; i++) {
            console.log(`${i+1}\) ${allJokes[i]}`);    
        }
    }
}

const saveJokeByNum = (num) => {
    initialiseJokes();
    let savedJoke = yoMama(num);
    allJokes.push(savedJoke);
    writeJokesInFile();
    console.log(`Joke number ${num} saved!`);
}

const showHelp = () => {
    console.log(`Help`);
}

const deleteJokeByNum = (num) => {
    // console.log(allJokes);
    initialiseJokes();
    if (num <= allJokes.length) {
        allJokes.splice(num-1, 1);
    }
    else {
        console.log("Number provided invalid!");
    }
    writeJokesInFile();
}

const commandLineArgs = process.argv;

if(commandLineArgs.length == 2) {
    showRandomJoke();
} else if(commandLineArgs.length >= 3) {
    if (commandLineArgs[2] == "saved") {
        showSavedJokes();
    } else if (commandLineArgs[2] == "save") {
        let jokeNum = parseInt(commandLineArgs[3]);
        saveJokeByNum(jokeNum);
    } else if (commandLineArgs[2] == "help") {
        showHelp();
    } else if (commandLineArgs[2] == "delete") {
        let jokeNum = parseInt(commandLineArgs[3]);
        deleteJokeByNum(jokeNum);
    } else {
        let jokeNum = parseInt(commandLineArgs[2]);
        showJokeByNum(jokeNum);
    }
} else {
    showRandomJoke();
}