const prompt = require('prompt-sync')();

class TodoManager {

    process(string) {
        if (string === 'q') {
            return false;
        }
        return true;
    }

    loop(inputHandler) {
        while (true) {
            const userInput = inputHandler();
            if (!this.process(userInput)) {
                break;
            }
        }
    }
}

const main = (() => {
    const todoManager = new TodoManager();
    todoManager.loop(() => prompt(' '));
});

// main();

module.exports = TodoManager;