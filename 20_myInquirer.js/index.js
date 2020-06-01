const askDetails = require('./inquirer.js');
const Table = require('cli-table');

const main = async () => {
    let details = await askDetails();
    let name = details.personName,
    age = details.personAge,
    gender = details.personGender,
    country = details.personCountry;

    // console.log(name);

    let table = new Table();
    table.push(
        {
            'Name': name
        },
        {
            'Age': age
        },
        {
            'Gender': gender
        },
        {
            'Country': country
        }
    );
    console.log(table.toString());

}

main();