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
        spellcheck="false"
        v-model="referenceText"
      ></textarea>
    </div>

    <div class="md:flex-1 m-6 flex flex-col bg-transparent">
      <div class="bg-gray-200 px-3 py-2 shadow-inner rounded-t-md border-b">
        <p class="text-gray-700">Practice</p>
      </div>
      <textarea
        id="practice"
        class="p-2 bg-gray-100 shadow-md resize-y rounded-b-md focus:outline-none"
        spellcheck="false"
        v-model="practiceText"
        @input="first_last_Input()"
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
      started: false,
      finished: false,
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
  methods: {
    first_last_Input() {
      if (this.started == false && this.practiceText != "") {
        this.started = true;
        console.log(this.started);
      }

      if (
        this.started == true &&
        this.referenceText.length == this.practiceText.length &&
        this.practiceText.charAt(this.referenceText.length - 1) == "."
      ) {
        this.finished = true;
        console.log(this.finished);
      }
    },
  },
};
</script>

<style></style>
