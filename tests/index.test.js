const TodoManager = require("..");

describe('Todo list', () => {
    it('Enter q and leave', () => {
        const todoManager = new TodoManager();
        todoManager.loop(() => {return 'q'});
        expect();
    });
})