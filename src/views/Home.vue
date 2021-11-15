<template>
  <div id="home">
    <div class="main-todos">
      <h1>Todo Application</h1>
      <TodoForm @submited="addTodos" />

      <select v-model="filter">
        <option value="All">All</option>
        <option value="Completed">Completed</option>
        <option value="Not Completed">Not Completed</option>
      </select>
      <TodoItem
        v-for="todo in filteredTodos"
        :key="todo.id"
        :todo="todo"
        @toggleCompleted="toggleCompleted"
        @removeTodo="removeTodo"
      />
      <TodoFooter :todos="filteredTodos" @removeCompleted="removeCompleted" />
    </div>
  </div>
</template>

<script>
import TodoFooter from "@/components/TodoFooter.vue";
import TodoForm from "@/components/TodoForm.vue";
import TodoItem from "@/components/TodoItem.vue";
import Header from "@/components/Header.vue"
import { mapMutations, mapGetters } from 'vuex'
export default {
  components: { TodoForm, TodoItem, TodoFooter, Header },
  name: "Home",
  data() {
    return {
      filter: "All",
    };
  },
  async mounted() {
    this.$store.dispatch('fetchTodos')
  },
  computed: {
    ...mapGetters(['allTodos', 'filteredTodos']),
    filteredTodos() {
      let todos = this.allTodos
      switch (this.filter) {
        case "All":
          return todos;
        case "Completed":
          return todos.filter((todo) => todo.completed);
        case "Not Completed":
          return todos.filter((todo) => !todo.completed);

        default:
          return todos;
      }
    },
  },
  methods: {
    ...mapMutations(['addTodos', 'toggleCompleted', 'removeTodo', 'removeCompleted']),
    // addTodo(title) {
    //   this.$store.commit('addTodos', title)
    // },
    // toggleCompleted(id) {
    //   this.$store.commit('toggleCompleted', id)
    // },
    // removeTodo(id) {
    //   this.$store.commit('removeTodo', id)
    // },
    // removeCompleted() {
    //   this.$store.commit('removeCompleted')
    // },
  },
  //  watch: {
  //    filter(value) {
  //      console.log(value)
  //      console.log(this.filteredTodos)
  //    }
  //  },
};
</script>

<style>
body {
  background: #0b2429;
  margin: 0;
  padding: 0;
}
#home {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
h1 {
  color: #998235;
}
.main-todos {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
}
select {
  font-size: 21px;
  margin-top: 30px;
  border-radius: 10px;
  padding: 3px 35px;
  cursor: pointer;
}
</style>
