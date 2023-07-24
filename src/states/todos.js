import { create } from "zustand";

const useTodosStore = create((set, get) => ({
    todos: [],
    title: "",
    completed: false,
    fetchTodos: async () => {
        const response = await fetch("https://jsonplaceholder.typicode.com/todos");
        const todos = await response.json();
        set({ todos });
    },
    setTitle: (title) => set((state) => ({ title })),
    setCompleted: (completed) => set((state) => ({ completed })),
    resetTodo: () => set((state) => ({ title: "", completed: false })),
    addTodo: (todo) => {
        set((state) => ({ todos: [...state.todos, todo] }));
        get().resetTodo();
    },
    removeTodo: (id) =>
        set((state) => ({
            todos: state.todos.filter((todo) => todo.id !== id),
        })),
}));

export default useTodosStore;