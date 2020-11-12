<template>
  <TypingArea />
  <ScoreCard />
  <!-- <button @click="switchtimer()">timer switch from app</button> -->
  <!-- <p>state.message : {{ message }}</p> -->
</template>

<script>
import TypingArea from "./components/TypingArea.vue";
import ScoreCard from "./components/ScoreCard.vue";

// import { useTimer } from "./store";

export default {
  name: "App",
  components: {
    TypingArea,
    ScoreCard,
  },
  setup() {
    // const { message, updateMessage } = store();
    // updateMessage("Hello, ");
    // const { timer, toggleTimer } = useTimer();
    // function switchtimer() {
    //   console.log(isRef(timer));
    //   toggleTimer();
    // }
    // return { switchtimer };
  },
};
</script>
