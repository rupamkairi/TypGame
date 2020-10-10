<template>
  <div class="container mx-auto flex my-8">
    <div class="mx-auto bg-gray-200 flex rounded shadow py-6 px-8">
      <div class="flex-1 mx-6 text-blue-500">
        <p class="text-2xl font-bold uppercase">score</p>
        <p class="text-5xl font-black">{{ score }}</p>
      </div>
      <div class="flex-1 mx-6 text-red-500">
        <p class="text-2xl font-bold uppercase">mistakes</p>
        <p class="text-5xl font-black center">
          {{ mistakes }}
        </p>
      </div>
      <div class="flex-grow mx-6 text-green-500">
        <div class="border-l-4 border- pl-6">
          <p class="text-2xl font-bold uppercase">time</p>
          <p class="text-5xl font-black center">
            {{ time }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ScoreCard",
  data() {
    return {
      score: 0,
      mistakes: 0,
      time: "00:17",
    };
  },
};
</script>

<style></style>
