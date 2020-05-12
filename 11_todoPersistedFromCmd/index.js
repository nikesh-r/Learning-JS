const fs = require('fs');

const commandLineArgs = process.argv;
let todo;

const help = () => {
    console.log(`Todo List:
    There are 4 commands available
    1. help: This command shows all the available commands and how to use them.
    Usage:
    node todoPersistedFromCmd.js help
    
    2. add: This command is used to add an item in the todo list.
    Usage:
    node todoPersistedFromCmd.js add itemName

    3. delete: This command is used to delete an existing item in the todo list.
    Usage:
    node todoPersistedFromCmd.js delete itemName

    4. list: This command is used to list all items present in the todo list.
    Usage:
    node todoPersistedFromCmd.js list
    `);
}

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
    console.log("Updated List: ");
    listItem();
}

const deleteItem = (item) => {
    console.log("Deleting item: " + item);
    let i = todo.indexOf(item);
    if (i === -1) {
        console.error("Item not found in list.");
        return;
    }
    todo.splice(i, 1);
    console.log("Updated List: ");
    listItem();
}

const listItem = () => {
    if (!todo.length) {
        console.log("::List is empty::");
        return;
    }
    for (let i = 0; i < todo.length; i++) {
        console.log((i+1) + ". " + todo[i]);
    }
    saveItems();
}

if (commandLineArgs.length <= 2) {
    console.log(`No parameters passed!`);
    help();
} else {
    
    const operation = commandLineArgs[2];  // listItem, addItem, deleteItem
    const item = commandLineArgs[3];   // item to add, delete

    if (operation == "add") {
        intialiseTodo();
        addItem(item);
    } else if (operation == "delete") {
        intialiseTodo();
        deleteItem(item);
    } else if (operation == "list") {
        intialiseTodo();
        listItem();
    } else {
        help();
    }

}