<template>
  <div class="home">
    <h4>This is a home page</h4>
    <Typing/>
  </div>
</template>

<script>
import Typing from "../components/Typing.vue";

export default {
  name: "Home",
  components: {
    Typing
  }
};
</script>
