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

    completeTask(indice) {
        this.taskList.eq(indice).find('.toggle').click();
    }

    visit(){
    cy.visit('https://demo.playwright.dev/todomvc/#/')
    }

    addTask(task){
        this.inputBar.type(`${task}{enter}`);
    }

    addTasks(tasks){
        this.inputBar.type(`${tasks}{enter}`);
    }

    deleteTask(indice) {
        this.taskList.eq(indice)
            .trigger('mouseover')
            .find('.destroy')
            .click({ force: true });
    }

    editTask(indice, newTitle) {
        this.taskList.eq(indice).find('label').dblclick();
        this.taskList.eq(indice)
            .find('.edit')
            .clear()
            .type(`${newTitle}{enter}`);
    }

    addMultipleTasks(tasks) {
        tasks.forEach(singleTask => {
        this.addTask(singleTask);
    });
}

}

export default TodoPage;
