<template>
  <div class="home">
    <h4>This is a home page</h4>
    <Typing/>
    <Stats/>
  </div>
</template>

<script>
import Typing from "../components/Typing.vue";
import Stats from "../components/Stats.vue";

export default {
  name: "Home",
  components: {
    Typing,
    Stats
  }
};
</script>
