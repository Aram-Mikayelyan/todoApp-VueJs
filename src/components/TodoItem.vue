<template>
  <div class="todo-item-main">
    <div class="todo-item">
      <input 
        type="checkbox"
        :checked="todo.completed"
        @change="$emit('toggleCompleted', todo.id)"
        />
      <span :class="{done: todo.completed}">{{ todo.title }}</span>
      <button
        @click="$emit('removeTodo', todo.id)"
      >X</button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    toggleCompleted() {
      console.log(todo)
      this.$emit('toggleCompleted', todo.id)
    }
  },
  props: {
    todo: {
      id: Number,
      title: String,
      completed: Boolean,
    }
  }
}
</script>

<style scoped>
.todo-item-main {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.todo-item {
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
  border: 1px solid black;
  border-radius: 15px;
  padding: 10px 24px;
  background: cadetblue;
  color: beige;
  box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
  width: 50%;
}
input {
  height: 17px;
  width: 17px;
  cursor: pointer;
}
button {
  border-radius: 7px;
  width: 25px;
  border: none;
  cursor: pointer;
}
.done {
  text-decoration-line: line-through;
  text-decoration-color: black;
  text-decoration-thickness: 3px;
}
</style>
