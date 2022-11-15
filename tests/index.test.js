const TodoManager = require("..");

describe('Todo list', () => {
    it('Enter q and leave', () => {
        const todoManager = new TodoManager();
        const commands = ['q'];
        todoManager.loop(() => {return commands.shift()});
        expect();
    });
    it('Enter + task and add task', () => {
        const todoManager = new TodoManager();
        const commands = ['+ testTask', 'q'];
        todoManager.loop(() => {return commands.shift()});
        expect(todoManager.todos.length).toBe(1);
        expect(todoManager.todos[0].description).toBe('testTask');
        expect(todoManager.display()).toEqual(['0 [ ] testTask']);
    });
    it('Enter - task and remove task', () => {

    })
})