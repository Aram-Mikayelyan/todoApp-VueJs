export default {
  state: {
    todos: [],
  },
  actions: {
   async fetchTodos({ commit }) {
      const response = await fetch('https://jsonplaceholder.typicode.com/todos/?_limit=10')
      const todos = await response.json()
      
      commit('getTodos', todos)
    }
  },
  mutations: {
    getTodos(state, todos) {
      state.todos = todos
    },
    addTodos(state, title) {
      const newTodo = { id: Date.now(), title, completed: false };
      state.todos.unshift(newTodo);
    },
    toggleCompleted(state, id) {
      state.todos = state.todos.map((todo) => {
        return todo.id === id 
               ? { ...todo, completed: !todo.completed }
               : todo;
      });
    },
    removeTodo(state, id) {
      state.todos = state.todos.filter((todo) => todo.id !== id);
    },
    removeCompleted(state) {
      state.todos = state.todos.filter((todo) => !todo.completed);
    },
  },
  getters: {
    allTodos(state) {
      return state.todos;
    },
  },
};
