<template>
  <div class="container mx-auto flex my-8">
    <div class="mx-auto bg-gray-200 flex rounded shadow py-6 px-8">
      <div class="flex-1 mx-6 text-blue-500">
        <p class="text-2xl font-bold uppercase">score</p>
        <p class="text-5xl font-black">
          0<span class="text-xl font-bold">wpm</span>
        </p>
      </div>
      <div class="flex-1 mx-6 text-red-500">
        <p class="text-2xl font-bold uppercase">mistakes</p>
        <p class="text-5xl font-black center">0</p>
      </div>
      <div class="flex-grow mx-6 text-green-500">
        <div class="border-l-4 border- pl-6">
          <p class="text-2xl font-bold uppercase">time</p>
          <p class="text-5xl font-black center">00:00</p>
        </div>
      </div>
    </div>
    <div>
      <!-- <button @click="switchtimer()">timer switch from scorecard</button> -->
      <p>{{ timer }}</p>
    </div>
    <!-- <p>x: {{ x }} | y: {{ y }}</p> -->
  </div>
</template>

<script>
import { computed, watch, isRef, isReactive } from "vue";
import { useMousePosition, useTimer } from "../store";

export default {
  name: "ScoreCard",
  setup() {
    const { x, y } = useMousePosition();
    const { timer } = useTimer();

    // function switchtimer() {
    //   console.log(isRef(timer));
    //   toggleTimer();
    // }

    return { x, y, timer };

    // return {

    // };
  },
};
</script>

<style></style>
