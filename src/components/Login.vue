<template>
  <div class=" flex flex-col items-center justify-center">
    <div class="card bg-green-400 py-2 px-4">
      <h2>Login Page</h2>
      <form @submit.prevent="loginUser">
        <div class="form-group flex flex-col gap-3">
          <input
          v-model="email"
            class="py-2 px-5 rounded-md"
            type="email"
            placeholder="email"
          />
          <input
          v-model="password"
            class="py-2 px-5 rounded-md"
            type="password"
            placeholder="password"
          />
          <button class="py-2 px-5 bg-blue-200" type="submit">Login</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>

import { mapActions, mapGetters, mapState } from 'vuex';


export default {
  name: "login",
  data: () => ({
    email: "",
    password: "",
  }),
  methods: {
    ...mapActions(['login']),
    loginUser(){
      this.login({email: this.email, password: this.password}).then(()=>{
        // go to member area
        this.$router.push({ path: '/member' })
        alert('login successfully')
      })
      .catch((error)=>{
        alert('email or password is incorrect')
        console.log(error);
      })
    }
    
  },
  computed:{
    ...mapState(['user']),
    ...mapGetters(['isAuthenticated'])
  }
};
</script>

<style>
</style>