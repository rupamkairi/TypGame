<template>
  <div class="container mx-auto flex">
    <div class="flex-1 m-6 flex flex-col">
      <div class="bg-gray-200 px-3 py-4 shadow-inner rounded-t-md border-b">
        <div class="flex justify-between content-center">
          <p class="text-gray-700">Reference</p>
          <button
            class="bg-blue-500 hover:bg-blue-700 w-6 h-6 text-white rounded-full active:outline-none focus:outline-none"
            @click="fetchText()"
          >
            <svg style="width: 16px; height: 16px" viewBox="-2 0 16 24">
              <path
                fill="currentColor"
                d="M17.65,6.35C16.2,4.9 14.21,4 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20C15.73,20 18.84,17.45 19.73,14H17.65C16.83,16.33 14.61,18 12,18A6,6 0 0,1 6,12A6,6 0 0,1 12,6C13.66,6 15.14,6.69 16.22,7.78L13,11H20V4L17.65,6.35Z"
              />
            </svg>
          </button>
        </div>
      </div>
      <textarea
        id="reference"
        class="p-2 text-xl bg-gray-100 shadow-md resize-y rounded-b-md focus:outline-none"
        disabled
        spellcheck="false"
        v-model="referenceText"
      ></textarea>
    </div>

    <div class="flex-1 m-6 flex flex-col bg-transparent">
      <div class="bg-gray-200 px-3 py-4 shadow-inner rounded-t-md border-b">
        <p class="text-gray-700">Practice</p>
      </div>
      <textarea
        id="practice"
        class="p-2 text-xl bg-gray-100 shadow-md resize-y rounded-b-md focus:outline-none"
        spellcheck="false"
        v-model="practiceText"
        @input="first_last_Input(), error_check()"
      ></textarea>
    </div>
  </div>
</template>

<script>
import { useTimer, useMistakes } from "../store";

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
  computed: {},
  mounted() {
    this.fetchText();
  },
  methods: {
    first_last_Input() {
      const { startTimer, stopTimer } = useTimer();

      if (this.started == false && this.practiceText != "") {
        this.started = true;

        startTimer();
      }

      if (
        this.started == true &&
        this.referenceText.length == this.practiceText.length &&
        this.practiceText.charAt(this.referenceText.length - 1) == "."
      ) {
        this.finished = true;
        stopTimer();

        document.getElementById("practice").disabled = true;
      }
    },
    error_check() {
      const { mistakes, madeMistakes } = useMistakes();
      let l = this.practiceText.length;

      if (this.referenceText.charAt(l - 1) != this.practiceText.charAt(l - 1)) {
        madeMistakes(l - 1);
      }
    },
    fetchText() {
      document.getElementById(
        "reference"
      ).style.height = document.getElementById("practice").style.height = "0px";

      this.started = this.finished = false;
      // timer state reset
      // scores and mistake reset

      // let proxy = "https://cors-anywhere.herokuapp.com/";
      let url = `${location.protocol}//${location.host}/api/random`;
      // let url = `${proxy}https://typ-game.netlify.app/api/random`;
      console.log(url);
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          this.referenceText = data.text.trim();
        })
        .then(() => {
          this.textareaHeight = document.getElementById(
            "reference"
          ).scrollHeight;
          document.getElementById("reference").style.height =
            this.textareaHeight + "px";
          document.getElementById("practice").style.height =
            this.textareaHeight + "px";
        });

      // let text = "Hello, world.";
      // this.referenceText = text.trim();
      // this.textareaHeight = document.getElementById("reference").scrollHeight;
      // document.getElementById("reference").style.height =
      //   this.textareaHeight + "px";
      // document.getElementById("practice").style.height =
      //   this.textareaHeight + "px";
    },
  },
};
</script>

<style></style>
