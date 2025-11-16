class TodoPage{

    get header(){
        return cy.get('h1')
    }

    get inputBar() {
        return cy.get('.new-todo');
    }

    get taskList() {
        return cy.get('.todo-list li');
    }


    visit(){
    cy.visit('https://demo.playwright.dev/todomvc/#/')
    }

    addTask(task){
        this.inputBar.type(`${task}{enter}`);
    }

    deleteTask(indice) {
        this.taskList.eq(indice)
            .trigger('mouseover')
            .find('.destroy')
            .click({ force: true });
    }
//test

}

export default TodoPage;
