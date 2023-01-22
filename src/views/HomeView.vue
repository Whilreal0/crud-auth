<template>
  <section class="h-screen flex">
    <Member/>
  </section>
</template>

<script>
// @ is an alias to /src

import Member from './Member.vue';

export default {
  name: "HomeView",
  components: {
    Member
},
  data: () => ({
  //  
  }),
  
};
</script>
