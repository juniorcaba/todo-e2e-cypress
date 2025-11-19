    import TodoPage from '../pages/TodoPage';

describe('TodoPage To-Do', () => { 

    const todo = new TodoPage();

    beforeEach(() => {
        todo.visit();
    });

        it ('Add and Delete Task', () => {
        todo.header.should('have.text', 'todos')
        todo.inputBar.should('be.visible');
        todo.addTask('Hector Caba');
        todo.addTask('Wally Pena');
        todo.deleteTask(0);
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
        todo.addMultipleTasks(['Base de datos', 'Power BI', 'Dell']);
        todo.completeTask(1);
        });   

        it ('Filter by Actives tasks', () => {
        todo.header.should('have.text', 'todos')
        todo.addMultipleTasks(['Base de datos', 'Power BI', 'Dell']);
        todo.completeTask(0);
        cy.contains('Active').click();
        });

        it ('Filter by Completed tasks', () => {
        todo.header.should('have.text', 'todos')
        todo.addMultipleTasks(['Base de datos', 'Power BI', 'Dell']);
        todo.completeTask(1);
        cy.contains('Completed').click();
        });

        it ('Clear completed tasks', () => {
        todo.header.should('have.text', 'todos')
        todo.addMultipleTasks(['Base de datos', 'Power BI', 'Dell']);
        todo.completeTask(0);
        todo.completeTask(1);
        cy.contains('Clear completed').click();
        });



})