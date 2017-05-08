/* eslint-disable */
module.export ={
   setTodos : ({todos}) => {
        localStorage.setItem('todos', JSON.stringify(todos));
        return todos;
 },
    getTodos: () => {
        const stringTodos = localStorage.getItem('todos');
        const todos = [];

        try {
            this.todos = JSON.parse(stringTodos);
        } catch (e){

        }
       const filterTodos = (todos, showCompleted, searchText) => {
            filterTodos = todos;

            return filterTodos;
       }
}
};