const prompt = require('prompt-sync')();

class Todo {

    constructor(index, description) {
        this.index = index;
        this.description = description;
        this.done = false;
    }
}
class TodoManager {

    constructor() {
        this.todos = [];
    }

    reorderTodos(){
        for (let i = 0; i < this.todos.length; i++) {
            this.todos[i].index = i + 1;
        }
    }

    process(string) {
        if (string === 'q') {
            return false;
        }
        if (string.startsWith('+')) {
            this.todos.push(new Todo(this.todos.length + 1, string.slice(2)));
            this.display().forEach(todo => console.log(todo));
        }
        if (string.startsWith('-')) {
            this.todos = this.todos.filter(todo => todo.index != string.slice(2));
            this.reorderTodos();
            this.display().forEach(todo => console.log(todo));
        }
        if (string.startsWith('x')) {
            const todo = this.todos.find(todo => todo.index == string.slice(2));
            if(todo){
                todo.done = true;
                this.display().forEach(todo => console.log(todo));
            }
        }
        if (string.startsWith('o')) {
            const todo = this.todos.find(todo => todo.index == string.slice(2));
            if(todo){
                todo.done = false;
                this.display().forEach(todo => console.log(todo));
            }
        }
        return true;
    }

    loop(inputValue) {
        while (true) {
            const userInput = inputValue();
            if (!this.process(userInput)) {
                break;
            }
        }
    }

    display() {
        return this.todos.map((todo) => { return `${todo.index} ${todo.done ? '[x]' : '[ ]'} ${todo.description}` });
    }
}

const main = (() => {
    const todoManager = new TodoManager();
    todoManager.loop(() => { return prompt('') });
});

main();

module.exports = TodoManager;