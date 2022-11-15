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
        console.log(string);
        if (string === 'q') {
            return false;
        }
        if (string.startsWith('+')) {
            this.todos.push(new Todo(string.slice(2)));
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
}

const main = (() => {
    const todoManager = new TodoManager();
    todoManager.loop(() => { prompt(' ') });
});

//main();

module.exports = TodoManager;