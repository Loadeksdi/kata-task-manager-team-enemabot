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
        expect(todoManager.display()).toEqual(['1 [ ] testTask']);
    });
    it('Enter - task and remove task', () => {
        const todoManager = new TodoManager();
        const commands = ['+ testTask', '- 1', 'q'];
        todoManager.loop(() => {return commands.shift()});
        expect(todoManager.todos.length).toBe(0);
    });
    it('Enter x task and set task as done', () => {
        const todoManager = new TodoManager();
        const commands = ['+ testTask', 'x 1', 'q'];
        todoManager.loop(() => {return commands.shift()});
        expect(todoManager.todos[0].done).toBe(true);
    });
    it('Enter o task and set task as todo', () => {
        const todoManager = new TodoManager();
        const commands = ['+ testTask', 'x 1', 'o 1', 'q'];
        todoManager.loop(() => {return commands.shift()});
        expect(todoManager.todos[0].done).toBe(false);
    });
})