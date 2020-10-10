<template>
  <div class="container mx-auto flex">
    <div class="md:flex-1 m-6 flex flex-col">
      <div class="bg-gray-200 px-3 py-2 shadow-inner rounded-t-md border-b">
        <p class="text-gray-700">Reference</p>
      </div>
      <textarea
        id="reference"
        class="p-2 bg-gray-100 shadow-md resize-y rounded-b-md focus:outline-none"
        disabled
        v-model="referenceText"
      ></textarea>
    </div>

    <div class="md:flex-1 m-6 flex flex-col bg-transparent">
      <di class="bg-gray-200 px-3 py-2 shadow-inner rounded-t-md border-b">
        <p class="text-gray-700">Practice</p>
      </di>
      <textarea
        id="practice"
        class="p-2 bg-gray-100 shadow-md resize-y rounded-b-md focus:outline-none"
        v-model="practiceText"
      ></textarea>
    </div>
  </div>
</template>

<script>
export default {
  name: "TypingArea",
  data() {
    return {
      referenceText: "",
      practiceText: "",
      textareaHeight: Number,
    };
  },
  mounted() {
    let fetchPromise = fetch(
      "https://cors-anywhere.herokuapp.com/https://typ-game.netlify.app/api/random"
    )
      .then((response) => response.json())
      .then((data) => {
        this.referenceText = data.text;
      })
      .then(() => {
        this.textareaHeight = document.getElementById("reference").scrollHeight;
        document.getElementById("reference").style.height =
          this.textareaHeight + "px";
        document.getElementById("practice").style.height =
          this.textareaHeight + "px";
      });
  },
};
</script>

<style></style>
