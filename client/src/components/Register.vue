<template>
  <div>
    <h1>Register</h1>
    <input type="text" placeholder="Enter username" v-model="username" />
    <input type="password" placeholder="Enter password" v-model="password" />
    <button @click="register">Register</button>
  </div>
</template>
<script>
import AuthenticationService from "../services/AuthenticationService";
export default {
  data() {
    return { username: "", password: "" };
  },
  methods: {
    async register() {
      const response = await AuthenticationService.register({
        username: this.username,
        password: this.password,
      });
      console.log(response.data);
    },
  },
};
</script>
<style>
</style>