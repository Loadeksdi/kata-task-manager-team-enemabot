const TodoManager = require("..");

describe('Todo list', () => {
    it('Enter q and leave', () => {
        const command = 'q';
        const todoManager = new TodoManager();
        todoManager.process(command);
        expect()
    });
})