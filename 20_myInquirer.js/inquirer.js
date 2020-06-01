const inquirer = require('inquirer');
const inquirerAutocomplete =  require('inquirer-autocomplete-prompt');
const countries = require("./countries.json");

inquirer.registerPrompt('autocomplete', inquirerAutocomplete);


const filterCountries = async text => countries.filter(c => c.toLowerCase().includes(text.toLowerCase()));


// const filterCountries = async (text) => {
//     let results = [];
//     countries.forEach(country => {
//         if (country.toLowerCase().includes(text)) {
//             results.push(country);
//         }
//     });
//     return results;
// }

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
                type: 'autocomplete',
                name: 'personCountry',
                message: 'What is your country?',
                source: async function(answersSoFar, input) {
                    if (!input) {
                        return countries;
                    }
                    const result = await filterCountries(input);
                    return result;
                }
            }
        ])
        .then(answers => {
            // console.log(answers.personName);
            return answers;
        });
    return answers;
}

module.exports = askDetails;