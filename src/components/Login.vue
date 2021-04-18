<template>
<div>
<block-content>
        <form @submit.prevent="login">
        <h1 class="text-3xl mb-5"> Login </h1>
        <div class="">
        <label class="label" for="username">Username</label>
        <input
            class="border-2 ml-2"
            type="text"
            id="username"
            v-model="enteredUsername"
            required /></div>
        <div class="pt-2 ">
        <label class="label" for="password">Password</label>
        <input
            class="border-2 ml-2"
            type="password"
            id="password"
            v-model="enteredPassword" 
            required/></div>
          <div class="space-y-2 py-2 flex-col flex items-end">
        <button type="submit" class="bg-transparent hover:bg-green-500 text-green-500 font-semibold hover:text-white py-2 px-2 border border-green-500 hover:border-transparent rounded">Login</button>
        <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-2 border border-blue-500 hover:border-transparent rounded"><router-link to="/register">Register</router-link></button>       
          </div>
        </form>
</block-content>
</div>
</template>

<script>
export default {
  emits: ['login-user'],
  data() {
    return {
      enteredUsername: '',
      enteredPassword: '',
    }
  },
  methods: {
    login() {
      
      const userLogin = {
        username: this.enteredUsername,
        password: this.enteredPassword
      }
      this.enteredUsername = ''
      this.enteredPassword = ''
      this.$emit('login-user', userLogin)
      
    },
    
  }
}
</script>