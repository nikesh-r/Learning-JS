const inquirer = require('inquirer');

const askDetails = async () => {
    console.log("Enter your details:");
    let answers = await inquirer
        .prompt([
            {
                type: "input",
                name: "personName",
                message: "What is your name?"
            },
            {
                type: "number",
                name: "personAge",
                message: "What is your age?"
            },
            {
                type: "list",
                name: "personGender",
                message: "What is your gender?",
                choices: ['Male', 'Female', 'NonBinary']
            },
            {
                type: "input",
                name: "personCountry",
                message: "What is your country?"
            }
        ])
        .then(answers => {
            // console.log(answers.personName);
            return answers;
        });
    return answers;
}

module.exports = askDetails;