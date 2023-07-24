import useTodosStore from "./states/todos.js";
// console.log(useTodosStore.getState());

useTodosStore.subscribe(
    (oldTodos, newTodos) => console.log("todos değişti", oldTodos, newTodos)
); 


useTodosStore.setState({title: "test", id:Math.random(), completed: false});