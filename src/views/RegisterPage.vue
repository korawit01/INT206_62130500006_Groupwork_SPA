<template>
  <div class="register mt-40">
    <register @register-user="addNewRegister" ></register>
  </div>
</template>

<script>
// @ is an alias to /src
import Register from '@/components/Register.vue'
export default {
  components: {
    Register,
  },
  data() {
    return {
      url: ' http://localhost:5000/infoResults',
      errorMessage: null,
      oldId: '',
      oldName: '',
      oldRating: null,
      infoResults: [
      ],
      isEdit: false
    }
  },
  methods: {
    async addNewRegister(newRegister) {
      const res = await fetch(this.url, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify({
          username: newRegister.username,
          password: newRegister.password,
          firstname: newRegister.firstname,
          lastname: newRegister.lastname,
          nickname: newRegister.nickname
        })
      })
      const data = await res.json()
      this.infoResults = [...this.infoResults, data]
    },

    async fetchInfoResults() {
      const res = await fetch(this.url)
      const data = await res.json()
      return data
    },
  },
  async created() {
    this.infoResults = await this.fetchInfoResults()
  }
}
</script>