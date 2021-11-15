<template>
  <form @submit.prevent="submitHandler">
    <input 
      type="text" 
      placeholder="Add your todos"
      v-model="title"
      />
    <button>Add</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      title: '',
    }
  },
  methods: {
    submitHandler() {
      if(this.title.trim()) {
        this.$emit('submited', this.title.toLocaleUpperCase());
        this.title = ''
      }
    }
  },
}
</script>

<style scoped>
input {
  margin-right: 15px;
  width: 100%;
  border-radius: 10px;
  height: 24px;
  margin-bottom: 20px;
  outline: none;
}
button {
  width: 104%;
  border-radius: 10px;
  background: #998235;
  height: 30px;
  cursor: pointer;
}
</style>
