<template>
    <div>
        <block-content>
        <form @submit.prevent="register">
        <h1 class="text-3xl mb-5"> Register </h1>
        <div class="">
        <label class="label" for="username">Username</label>
        <input
            class="border-2 ml-2"
            type="text"
            id="username"
            v-model="enteredUsername" 
            required
            /></div>
        <div class="pt-2 ">
        <label class="label" for="password">Password</label>
        <input
            class="border-2 ml-2"
            type="text"
            id="password"
            v-model="enteredPassword" 
            required
            /></div>
        <div class="pt-2 ">
        <label class="label" for="firstname">Firstname</label>
        <input
            class="border-2 ml-2"
            type="text"
            id="firstname"
            v-model="enteredFirstname" 
            required
            /></div>
        <div class="pt-2 ">
        <label class="label" for="lastname">Lastname</label>
        <input
            class="border-2 ml-2"
            type="text"
            id="lastname"
            v-model="enteredLastname" 
            required
            /></div>
        <div class="pt-2 ">
        <label class="label" for="nickname">Nickname</label>
        <input
            class="border-2 ml-2"
            type="text"
            id="nickname"
            v-model="enteredNickname" 
            required
            /></div>
          <div class="space-y-2 py-2 flex-col flex items-end">
        <button type="submit" class="bg-transparent hover:bg-green-500 text-green-500 font-semibold hover:text-white py-2 px-2 border border-green-500 hover:border-transparent rounded">Confirm</button>
        <button class="bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-2 px-2 border border-red-500 hover:border-transparent rounded"><router-link to="/">Cancel</router-link></button>       
          </div>
        </form>
</block-content>
    </div>
</template>
<script>
export default {
    emits: ['register-user'],
    data(){
        return{
            enteredUsername: '',
            enteredPassword: '',
            enteredFirstname: '',
            enteredLastname: '',
            enteredNickname: '',
        }
    },
    methods: {
    register() {
      const userRegister = {
        username: this.enteredUsername,
        password: this.enteredPassword,
        firstname: this.enteredFirstname,
        lastname: this.enteredLastname,
        nickname: this.enteredNickname
      }
      this.enteredUsername = ''
      this.enteredPassword = ''
      this.enteredFirstname = ''
      this.enteredLastname = ''
      this.enteredNickname = ''
      this.$emit('register-user', userRegister)
      alert('Register Success')
    },
    
  }
}
</script>