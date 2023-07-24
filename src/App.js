import { useEffect } from "react";
import AddTodo from "./AddTodo";
import useTodosStore from "./states/todos";
import {shallow} from "zustand/shallow";
import "./test"

function App() {
  const {removeTodo, todos, fetchTodos} = useTodosStore((state) => ({
    removeTodo: state.removeTodo,
    todos: state.todos,
    fetchTodos: state.fetchTodos
  }), shallow);
  // useEffect(() => {
  //   fetchTodos();
  // }, []);
  return (
    <div className="App">
      <h1>My Todos</h1>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.title} 
            <button onClick={() => removeTodo(todo.id)}>x</button>
          </li>
        ))}
      </ul>
      <AddTodo />
    </div>
  );
}

export default App;
