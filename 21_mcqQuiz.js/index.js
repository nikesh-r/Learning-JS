// https://opentdb.com/api.php?amount=5&type=multiple

const inquirer = require('inquirer');
const fs = require('fs');

let jsonObject;
let choicesOne, choicesTwo, choicesThree, choicesFour, choicesFive;
let count = 0;
let One, Two, Three, Four, Five;

const getJsonObject = () => {
    try {
        jsonObject = JSON.parse(fs.readFileSync('./questions.json', 'utf8'));
        // console.log('File data:', jsonObject);
    } catch (err) {
        console.error('Error parsing JSON string:', err);
    }
}

const generateRandomQueNum = () => {
    let uniqueNumArray = [];
    while (uniqueNumArray.length < 5) {
        let randNum = Math.floor(Math.random() * 50);
        if (uniqueNumArray.indexOf(randNum) == -1) {
            uniqueNumArray.push(randNum);
        }
    }
    One = uniqueNumArray[0];
    Two = uniqueNumArray[1];
    Three = uniqueNumArray[2];
    Four = uniqueNumArray[3];
    Five = uniqueNumArray[4];

    console.log(One, Two, Three, Four, Five);
}

const optionsOfQuestionOne = () => {
    choicesOne = jsonObject[One].incorrect_answers;
    choicesOne.push(jsonObject[One].correct_answer);
}

const optionsOfQuestionTwo = () => {
    choicesTwo = jsonObject[Two].incorrect_answers;
    choicesTwo.push(jsonObject[Two].correct_answer);
}

const optionsOfQuestionThree = () => {
    choicesThree = jsonObject[Three].incorrect_answers;
    choicesThree.push(jsonObject[Three].correct_answer);
}

const optionsOfQuestionFour = () => {
    choicesFour = jsonObject[Four].incorrect_answers;
    choicesFour.push(jsonObject[Four].correct_answer);
}

const optionsOfQuestionFive = () => {
    choicesFive = jsonObject[Five].incorrect_answers;
    choicesFive.push(jsonObject[Five].correct_answer);
}

const shuffle = (array) => {
    let currentIndex = array.length, temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
    
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }  
    return array;
}

const askQuestions = async () => {
    let answers = await inquirer
    .prompt([
        /* Pass your questions in here */
        {
            type: "list",
            name: "answerOne",
            message: jsonObject[One].question,
            choices: choicesOne
        },
        {
            type: "list",
            name: "answerTwo",
            message: jsonObject[Two].question,
            choices: choicesTwo
        },
        {
            type: "list",
            name: "answerThree",
            message: jsonObject[Three].question,
            choices: choicesThree
        },
        {
            type: "list",
            name: "answerFour",
            message: jsonObject[Four].question,
            choices: choicesFour
        },
        {
            type: "list",
            name: "answerFive",
            message: jsonObject[Five].question,
            choices: choicesFive
        }
    ])
    .then(answers => {
        // Use user feedback for... whatever!!
        // console.log(answers);
        return answers;
    });
    return answers;
}

const checkAnswerOne = (answerOne) => {
    if (jsonObject[One].correct_answer == answerOne) {
        console.log(`\n1. ${jsonObject[One].correct_answer}. Correct answer.`);
        count++;
    } else {
        console.log(`\n1. Your answer is wrong. Correct answer is: ${jsonObject[One].correct_answer}`);
    }
}

const checkAnswerTwo = (answerTwo) => {
    if (jsonObject[Two].correct_answer == answerTwo) {
        console.log(`2. ${jsonObject[Two].correct_answer}. Correct answer.`);
        count++;
    } else {
        console.log(`2. Your answer is wrong. Correct answer is: ${jsonObject[Two].correct_answer}`);
    }
}

const checkAnswerThree = (answerThree) => {
    if (jsonObject[Three].correct_answer == answerThree) {
        console.log(`3. ${jsonObject[Three].correct_answer}. Correct answer.`);
        count++;
    } else {
        console.log(`3. Your answer is wrong. Correct answer is: ${jsonObject[Three].correct_answer}`);
    }
}

const checkAnswerFour = (answerFour) => {
    if (jsonObject[Four].correct_answer == answerFour) {
        console.log(`4. ${jsonObject[Four].correct_answer}. Correct answer.`);
        count++;
    } else {
        console.log(`4. Your answer is wrong. Correct answer is: ${jsonObject[Four].correct_answer}`);
    }
}

const checkAnswerFive = (answerFive) => {
    if (jsonObject[Five].correct_answer == answerFive) {
        console.log(`5. ${jsonObject[Five].correct_answer}. Correct answer.`);
        count++;
    } else {
        console.log(`5. Your answer is wrong. Correct answer is: ${jsonObject[Five].correct_answer}`);
    }
}

const result = () => {
    if (count == 5) {
        console.log(`\nYou scored ${count} out of 5. Perfect!!!`);
    } else if (count <= 4 && count >= 2) {
        console.log(`\nYou scored ${count} out of 5. Good! Keep Up.`);
    } else {
        console.log(`\nYou scored ${count} out of 5. No worries! Better luck next time.`);
    }
}

const main = async () => {

    getJsonObject();

    generateRandomQueNum();

    optionsOfQuestionOne();
    optionsOfQuestionTwo();
    optionsOfQuestionThree();
    optionsOfQuestionFour();
    optionsOfQuestionFive();

    shuffle(choicesOne);
    shuffle(choicesTwo);
    shuffle(choicesThree);
    shuffle(choicesFour);
    shuffle(choicesFive);

    let details = await askQuestions();

    checkAnswerOne(details.answerOne);
    checkAnswerTwo(details.answerTwo);
    checkAnswerThree(details.answerThree);
    checkAnswerFour(details.answerFour);
    checkAnswerFive(details.answerFive);

    result();
}

main();