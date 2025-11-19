    import TodoPage from '../pages/TodoPage';

describe('TodoPage To-Do', () => { 

    const todo = new TodoPage();

    beforeEach(() => {
        todo.visit();
    });

        it ('Add Task', () => {
        todo.header.should('have.text', 'todos')
        todo.inputBar.should('be.visible');
        todo.addTask('Selena Gomez');
        todo.addTask('Wanderlust');
        });

        it ('Add and Edit Tasks', () => {
        todo.header.should('have.text', 'todos')
        todo.inputBar.should('be.visible');
        todo.addTask('Checkbox');
        todo.addTask('item');
        todo.editTask(0, 'Linkin park');
        });

        it ('Completed tasks', () => {
        todo.header.should('have.text', 'todos')
        todo.addMultipleTasks(['Data base', 'Power BI', 'Dell']);
        todo.completeTask(1);
        });   

        it ('Filter by Actives tasks', () => {
        todo.header.should('have.text', 'todos')
        todo.addMultipleTasks(['Data base', 'Power BI', 'Dell']);
        todo.completeTask(0);
        cy.contains('Active').click();
        });

        it ('Filter by Completed tasks', () => {
        todo.header.should('have.text', 'todos')
        todo.addMultipleTasks(['Data base', 'Power BI', 'Dell']);
        todo.completeTask(1);
        cy.contains('Completed').click();
        });

        it ('Clear completed tasks', () => {
        todo.header.should('have.text', 'todos')
        todo.addMultipleTasks(['Data base', 'Power BI', 'Dell']);
        todo.completeTask(0);
        todo.completeTask(1);
        cy.contains('Clear completed').click();
        });

})