<template>
  <div class="contact-main">
    <h1>Please Provide Your Info</h1>
    <form class="contact-form">
      <input v-model="nameInput" type="text" placeholder="First Name" />
      <input v-model="lastNameInput" type="text" placeholder="Last Name" />
      <input v-model="emailInput" type="text" placeholder="Email" />
      <button class="send-btn">Send</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nameInput: "",
      lastNameInput: "",
      emailInput: "",
    };
  },
};
</script>

<style scoped>
.contact-main {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
h1 {
  color: #998235;
  margin-bottom: 50px;
}
.contact-form {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: #998235;
  padding: 50px;
  margin: 0 auto;
  width: 40%;
  border-radius: 15px;
}
input {
  margin-bottom: 20px;
  height: 40px;
  border-radius: 10px;
  border: 2px solid #2c3e50;
  outline: none;
  width: 100%;
  font-size: 17px;
}
input:last-child {
  margin-bottom: 0;
}
.send-btn {
  align-self: center;
  background: #998235;
  height: 35px;
  width: 50%;
  font-weight: 700;
  color: #2c3e50;
  font-size: 18px;
  cursor: pointer;
  border-radius: 10px;
  border: 3px solid #2c3e50;
}
</style>
