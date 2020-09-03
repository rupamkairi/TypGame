<template>
  <div class="home">
    <h1>This is a home page</h1>
    <Hero/>
  </div>
</template>

<script>
// @ is an alias to /src
import Hero from "@/components/Hero.vue";

export default {
  name: "Home",
  components: {
    Hero
  }
};
</script>
