<template>
  <Nav class="bg-red-900 p-2">
    <div class="flex gap-2 items-end justify-end">
      <button class="px-4 py-1 rounded-md bg-green-200">
        <router-link to="/login"> Login </router-link>
      </button>
      <button class="px-2 py-1 rounded-md bg-green-200">
        <router-link to="/register"> Register </router-link>
      </button>
    </div>
  </Nav>
</template>

<script>
export default {};
</script>

<style>
</style>