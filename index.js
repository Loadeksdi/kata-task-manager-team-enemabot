const prompt = require('prompt-sync')();

class Todo {

    constructor(description) {
        this.description = description;
        this.done = false;
    }
}
class TodoManager {

    constructor(){
        this.todos = [];
    }

    process(string) {
        if (string === 'q') {
            return false;
        }
        if (string.startsWith('+')) {
            this.todos.push(new Todo(string.slice(2)));
            this.display().forEach(todo => console.log(todo));
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
        const text = [];
        this.todos.forEach((todo, index) => {
            text.push(`${index + 1} ${todo.done ? '[x]' : '[ ]'} ${todo.description}`);
        });
        return text;
    }
}

const main = (() => {
    const todoManager = new TodoManager();
    todoManager.loop(() => { return prompt('') });
});

main();

module.exports = TodoManager;