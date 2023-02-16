let input = prompt("what would you like to do?");
const todos = ['Collect Chicken and Eggs', 'CLean Litter Box'];

while(input !== "quit" && input !== 'q'){
    if(input === 'list'){
        console.log('****************');
        for(let i = 0; i < todos.length; i++){
            console.log(`${i}`:`${todos[i]}`);
        }
        console.log('****************');
    }
    else if(input === 'new'){
        const newTodo = prompt("OK, what is the new to do?");
        todos.push(newTodo);
        console.log(`${newTodo} added to the list`);
    }
    else if(input === 'delete'){
        const index = parseInt(prompt("Ok, enter an index to delete"));
        const deleted = todos.splice(index, 1);
        console.log(`OK, deleted ${deleted}`);
    }
    let input = prompt("what would you like to do?");
}
console.log("OK, quit the app");
