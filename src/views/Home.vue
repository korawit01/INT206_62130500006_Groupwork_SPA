<template>
  <div class="home mt-40 ">
    <login v-if="!login" @login-user='validateUsernamePassword'></login>
    <information v-else :info='infoResults' @edited-info='editInfo' @delete-user='deleteId'> </information>
  </div>
</template>

<script>
// @ is an alias to /src
import Login from '@/components/Login.vue'
import Information from '../components/Infomation.vue'

export default {
  components: {
    Login,
    Information
  },
data(){
  return{
    url: ' http://localhost:5000/infoResults',
    infoResults: [],
    login: false,
  }
},
methods: {
  async fetchUsernamePassword(){
    try{
      const res = await fetch(this.url)
      const data = await res.json()
      return data
    } catch (error){
      console.log(error)
    }
  },
  validateUsernamePassword(UsernamePassword){
      console.log(UsernamePassword.username)
    
      this.infoResults = this.infoResults.filter((info) => info.username == UsernamePassword.username 
      && info.password == UsernamePassword.password)
      if(this.infoResults.length !== 0){
      if(this.infoResults[0].username == UsernamePassword.username 
      && this.infoResults[0].password == UsernamePassword.password){
        alert('Login Success')
        this.login = true
      }}
      else{
      alert('Login fail')
      location.reload();
      }
      console.log(this.infoResults)
      },

      // edit(){
      //       const editInfo = {
      //           username: this.infoResults[0].username,
      //           password: this.infoResults[0].password,
      //           firstname: this.infoResults[0].firstname,
      //           lastname: this.infoResults[0].lastname,
      //           nickname: this.infoResults[0].nickname
      //       }
      //       this.$emit('edit-info', editInfo)
      //   },

    async editInfo(editingData) {
      const res = await fetch(`${this.url}/${this.infoResults[0].id}`, {
        method: 'PUT',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify({
          username: this.infoResults[0].username,
          password: editingData.password,
          firstname: editingData.firstname,
          lastname: editingData.lastname,
          nickname: editingData.nickname
        })
      })
      const data = await res.json()
      this.infoResults = this.infoResults.map((info) =>
        info.id === info.id
          ? {
              ...info,
              username: data.username,
              password: data.password,
              firstname: data.firstname,
              lastname: data.lastname,
              nickname: data.nickname
            }
          : info
      )
    },
    async deleteId() {
        const res = await fetch(`${this.url}/${this.infoResults[0].id}`, {
          method: 'DELETE'
        })
        res.status === 200
          ? (this.infoResults = this.infoResults.filter(
              (info) => info.id !== this.infoResults[0].id
            ))
          : alert('Error to delete survey')
      
    },
},
async created() {
    this.infoResults = await this.fetchUsernamePassword()
  }

}
</script>
