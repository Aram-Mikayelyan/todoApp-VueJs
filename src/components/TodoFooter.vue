<template>
  <div class="todo-footer">
    <span>{{ todos.filter(t => t.completed).length }} / {{ todos.length }} Completed</span>
    <button
      @click="removeCompleted"
    >Clear Completed</button>
  </div>
</template>

<script>
export default {
  methods: {
    removeCompleted() {
      this.$emit('removeCompleted');
    }
  },
  props: {
    todos: {
      type: Array
    }
  }
}
</script>

<style scoped>
.todo-footer {
  display: flex;
  width: 50%;
  justify-content: space-between;
  margin-top: 40px;
  color: #998235;
}
button {
  padding: 5px 24px;
  border-radius: 10px;
  border: none;
  cursor: pointer;
}

</style>
