const fs = require('fs');

function writeCallback(err) {
    if (err) {
        console.log("An error occured while writing JSON Object to File.");
        return console.log(err);
    }
 
    console.log("JSON file has been saved.");
}

const person = {
    name : "",
    age : 0,
    isRacist : false,
    address : {
        city : "",
        country : "",
        pincode : 0
    },
    hobbies: []
};

person.name = "nick";
person.age = 20;
person.address.city = "Paris";
person.hobbies.push("Playing VideoGames");

console.log(person);

const jsonContent = JSON.stringify(person, null, 2);   //converting js object to json string
console.log(jsonContent);
 
//Saving JSON String content to a json file
fs.writeFile("outputPerson.json", jsonContent, 'utf8', writeCallback);