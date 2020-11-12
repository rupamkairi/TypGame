<template>
  <TypingArea />
  <ScoreCard />
</template>

<script>
import TypingArea from "./components/TypingArea.vue";
import ScoreCard from "./components/ScoreCard.vue";

export default {
  name: "App",
  components: {
    TypingArea,
    ScoreCard,
  },
  setup() {},
};
</script>
