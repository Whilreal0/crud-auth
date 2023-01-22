<template>
  <div class=" flex flex-col items-center justify-center">
    <div class="card bg-green-400 py-2 px-4">
      <h2>Register Page</h2>
      <form @submit.prevent="handleSubmit">
        <div class="form-group flex flex-col gap-3">
          <input
            class="py-2 px-5 rounded-md"
            v-model="email"
            type="email"
            placeholder="email"
          />
          <input
            class="py-2 px-5 rounded-md"
            v-model="password"
            type="password"
            placeholder="password"
          />
          <button class="py-2 px-5 bg-blue-200">Register</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>

import { mapActions } from 'vuex';



export default {
  name: 'Register',
  data:()=>({
    email: '',
    password: ''
  }),
  methods:{
    ...mapActions(['register']),
  handleSubmit(){
    
    this.register({email: this.email, password: this.password}).then(()=>{
      this.$router.replace('/login')
      alert('registered')
    })
    .catch((error)=>{
      console.log(error)
    })
  }
}
}
</script>
