<template>
    <div class="flex flex-row justify-center space-x-16">
        <block-content  >
            <div >
                <form @submit.prevent="edited">
                <h1 class="text-3xl mb-5"> Infomation Edit </h1>
        <div class="">
        <label class="label flex flex-col items-start" for="username"> Username : {{ info[0].username }}</label>
        </div>
        <div class="pt-2 ">
        <label class="label flex flex-col items-start" for="oldpassword">Old Password : {{ info[0].password }}</label>
        </div>
        <div class="pt-2 ">
        <label class="label" for="newpassword">New Password : </label>
        <input 
            class="border-2 ml-2"
            type="text"
            id="newpassword"
            v-model="password"
            required
            />
        </div>
        <div class="pt-2 ">
        <label class="label flex flex-col items-start" for="oldfirstname">Old Firstname : {{ info[0].firstname }}</label>
        </div>
        <div class="pt-2 ">
        <label class="label" for="newfirstname">New Firstname : </label>
        <input 
            class="border-2 ml-2"
            type="text"
            id="newfirstname"
            v-model="firstname"
            required
            />
        </div>
        <div class="pt-2 ">
        <label class="label flex flex-col items-start" for="oldlastname">Old lastname : {{ info[0].lastname }}</label>
        </div>
        <div class="pt-2 ">
        <label class="label" for="newlastname">New Lastname : </label>
        <input 
            class="border-2 ml-2"
            type="text"
            id="newlastname"
            v-model="lastname"
            required
            />
        </div>
        <div class="pt-2 ">
        <label class="label flex flex-col items-start" for="oldnickname">Old Nickname : {{ info[0].nickname }}</label>
        </div>
        <div class="pt-2 ">
        <label class="label" for="newnickname">New Nickname : </label>
        <input 
            class="border-2 ml-2"
            type="text"
            id="newnickname"
            v-model="nickname"
            required
            />
        </div>
          <div class="space-y-2 py-2 flex-col flex items-end">
        <button type="submit" class="bg-transparent hover:bg-green-500 text-green-500 font-semibold hover:text-white py-2 px-2 border border-green-500 hover:border-transparent rounded">Confirm</button>
        <button @click="cancelEdit" class="bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-2 px-2 border border-red-500 hover:border-transparent rounded">Logout</button>       
          </div>
                </form>
            </div>
        </block-content>
        <img class="h-10 w-10 mt-52" src="https://cdn.pixabay.com/photo/2017/06/20/14/55/icon-2423349__340.png">
        <block-content >
            <div> 
                <h1 class="text-3xl mb-5"> Infomation </h1>
        <div class="">
        <label class="label" for="username">Your Username : {{ info[0].username }}</label>
        </div>
        <div class="pt-2 ">
        <label class="label" for="password">Your Password : {{ info[0].password }}</label>
        </div>
        <div class="pt-2 ">
        <label class="label" for="firstname">Your Firstname : {{ info[0].firstname }}</label>
        </div>
        <div class="pt-2 ">
        <label class="label" for="lastname">Your lastname : {{ info[0].lastname }}</label>
        </div>
        <div class="pt-2 ">
        <label class="label" for="nickname">Your nickname : {{ info[0].nickname }}</label>
        </div>
          <div class="space-y-2 py-2 flex-col flex items-end">
        <button @click="deleteInfo" class="bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-2 px-2 border border-red-500 hover:border-transparent rounded">Delete</button>       
          </div>
            </div>
        </block-content>
        
        
        
    </div>
</template>
<script>
import BlockContent from './UI/BlockContent.vue'

export default {
  components: { BlockContent },
    props: ['info'],
    date(){
        return {
            password: '',
            firstname: '',
            lastname: '',
            nickname: '',
            editing: false,
        }
    },
    methods: {
        goEdit(){
            console.log("HERE")
            this.editing = true
            console.log(this.editing)
        },
        edited(){
            
            const editInfo = {
                password: this.password,
                firstname: this.firstname,
                lastname: this.lastname,
                nickname: this.nickname,
            }
                this.password = '',
                this.firstname = '',
                this.lastname = '',
                this.nickname = '',
            this.$emit('edited-info', editInfo)
            alert('Edit Success')
            this.editing = false
            
        },
        cancelEdit(){
            this.editing = false
            alert('Bye')
            location.reload();
        },
        deleteInfo(){
            if(confirm(" Sure to delete? ")){
                alert("Deleted")
                this.$emit('delete-user')
                location.reload();
            }else{
                alert("Cancel deleted")
            }
        }
}
}
</script>