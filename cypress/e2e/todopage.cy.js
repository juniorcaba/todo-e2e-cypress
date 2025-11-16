    import TodoPage from '../pages/TodoPage';

describe('TodoPage To-Do', () => { 

    const todo = new TodoPage();

    beforeEach(() => {
        todo.visit();
    });

    it('Validar etiqueta H1', () => {
        todo.header.should('have.text', 'todos');
    });

    it ('Agregar task 1', () => {
        todo.inputBar.should('be.visible');
        todo.addTask('Hector Caba');
    });

    it ('Agregar task 2', () => {
        todo.inputBar.should('be.visible');
        todo.addTask('Wally Pena');
    });

    it ('Eliminar task', () => {
        todo.addTask('Wally Pena');
        todo.deleteTask(0);
    });

})