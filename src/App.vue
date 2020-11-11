<template>
  <TypingArea />
  <ScoreCard />
  <p>{{ message }}from app</p>
  <p>{{ startFlag }}</p>
</template>

<script>
import TypingArea from "./components/TypingArea.vue";
import ScoreCard from "./components/ScoreCard.vue";

import store from "./store";

export default {
  name: "App",
  components: {
    TypingArea,
    ScoreCard,
  },
  setup() {
    const { message, startFlag, updateMessage } = store();

    updateMessage("Hello, ");

    return { message: message, startFlag: startFlag };
  },
};
</script>
