const fs = require('fs');
let todo;

const intialiseTodo = () => {
    try {
        todo = JSON.parse(fs.readFileSync("outputTodo.json", "utf8"));
        console.log("Initialising Todo");
    }
    catch (err) {
        console.error("Read file failed! Initialising todo[]");
        todo = [];
    }
}

const saveItems = () => {
    let jsonContent = JSON.stringify(todo, null, 2);   //converting js object to json string

    //Saving JSON String content to a json file
    fs.writeFileSync("outputTodo.json", jsonContent);
    console.log("File Write successful");
}

const addItem = (item) => {
    console.log("Adding item: " + item);    
    todo.push(item);
    listItem();
}

const deleteItem = (item) => {
    console.log("Deleting item: " + item);
    let i = todo.indexOf(item);
    todo.splice(i, 1);
    console.log("Updated List: ");
    listItem();
}

const listItem = () => {
    for (let i = 0; i < todo.length; i++) {
        console.log((i+1) + " " + todo[i]);
    }
    saveItems();
}

// todo = ["world", "fruits", "hello", "groceries"];

intialiseTodo();

listItem();
addItem("work");
deleteItem("fruits");