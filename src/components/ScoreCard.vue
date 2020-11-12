<template>
  <div class="container mx-auto flex my-8">
    <div class="mx-auto bg-gray-200 flex rounded shadow py-6 px-8">
      <div class="flex-1 mx-6 text-blue-500">
        <p class="text-2xl font-bold uppercase">score</p>
        <p class="text-5xl font-black">
          {{ wpm }}<span class="text-xl font-bold">wpm</span>
        </p>
      </div>
      <div class="flex-1 mx-6 text-red-500">
        <p class="text-2xl font-bold uppercase">mistakes</p>
        <p class="text-5xl font-black center">{{ mistakes.length }}</p>
      </div>
      <div class="flex-grow mx-6 text-green-500">
        <div class="border-l-4 border- pl-6">
          <p class="text-2xl font-bold uppercase">time</p>
          <p class="text-5xl font-black center">{{ formattedTime }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, computed, watch } from "vue";
import { useTimer, useMistakes } from "../store";

export default {
  name: "ScoreCard",
  setup() {
    const { timer } = useTimer();
    const wpm = ref(0);
    const formattedTime = ref("00m 00s");
    const { mistakes } = useMistakes();

    let timeSeconds = 0;
    let writingFlag = false;
    let words;

    setInterval(() => {
      if (writingFlag) {
        ++timeSeconds;
        formattedTime.value =
          parseInt(timeSeconds / 60) + "m " + (timeSeconds % 60) + "s";
      }
    }, 1000);

    watch(timer, (newValue, oldValue) => {
      // console.log([newValue, oldValue]);

      if (newValue == true) {
        writingFlag = true;
        // console.log("writing " + writingFlag);
      }

      if (oldValue == true) {
        writingFlag = false;
        // console.log("writing " + writingFlag);
        words = document.getElementById("reference").value.split(" ").length;
        wpm.value = parseFloat((words / timeSeconds) * 60).toFixed(2);
      }
    });

    return { timer, wpm, mistakes, formattedTime };
  },
};
</script>

<style></style>
