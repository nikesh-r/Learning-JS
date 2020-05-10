const addItem = (item) => {
    console.log("Adding item: " + item);    
    todo.push(item);
    console.log("Updated List: ");
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
}

const todo = ["world", "fruits", "hello", "groceries"];

listItem();
addItem("work");
deleteItem("fruits");