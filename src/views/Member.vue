<template>
  <div>
    <div v-if="user" class="flex flex-col w-full items-center">
      <h2>Welcome, {{ user.email }}</h2>
      <div v-if="showUpdatePasswordInput">
        <input
          v-model="newPassword"
          type="password"
          id="new-password"
          class="py-2 px-4 rounded-md"
        />
        <button
          @click="updatePassword(newPassword)"
          class="py-2 px-4 bg-green-400 rounded-md"
        >
          Update Password
        </button>
      </div>

      <div class="flex gap-2">
        <button
          @click="showUpdatePasswordInput = !showUpdatePasswordInput"
          class="py-2 px-4 bg-green-400 rounded-md"
        >
          Change Password
        </button>
        <button @click="deleteUser" class="py-2 px-4 bg-green-400 rounded-md">
          delete user
        </button>
        <button @click="logoutUser" class="py-2 px-4 bg-green-400 rounded-md">
          logout user
        </button>
      </div>
    </div>

    <h2 v-else>Please login first</h2>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from "vuex";
export default {
  name: "member",
  data: () => ({
    showUpdatePasswordInput: false,
    newPassword: "",
  }),
  methods: {
    ...mapActions(["logout"]),
    logoutUser() {
      this.logout()
        .then(() => {
          this.$router.push({ path: "/login" });
        })
        .catch((error) => {
          console.log(error);
        });
    },
    ...mapActions(["delete"]),
    deleteUser() {
      this.delete()
        .then(() => {
          this.$router.push({ path: "/login" });
        })
        .catch((error) => {
          console.log(error);
        });
    },
    ...mapActions(["updatePassword"]),
   
  },
  computed: {
    ...mapState(["user"]),
    ...mapGetters(["isAuthenticated"]),
  },
};
</script>

<style>
</style>