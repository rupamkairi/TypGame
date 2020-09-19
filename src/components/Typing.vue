<template>
  <div>
    <v-row>
      <v-col cols="12" sm="6">
        <v-textarea
          class="black--text text-subtitle-1 font-weight-light p2"
          disabled
          solo
          no-resize
          auto-grow
          v-model="textdata"
        ></v-textarea>
      </v-col>
      <v-col cols="12" sm="6">
        <v-textarea
          class="text-subtitle-1 font-weight-regular"
          outlined
          flat
          no-resize
          auto-grow
          v-model="typedata"
          @input="CheckText"
        ></v-textarea>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Typing",
  data() {
    return {
      height: 0,
      textdata: "",
      typedata: ""
    };
  },
  mounted() {
    console.log("mount");
    let Url =
      "https://cors-anywhere.herokuapp.com/https://typ-game.now.sh/api/random";
    console.log(Url);

    axios({
      method: "GET",
      url: Url,
      headers: {
        "Access-Control-Allow-Origin": "*"
      }
    })
      .then(res => {
        console.log(res.data);
        this.textdata = res.data.text;
      })
      .catch(err => console.log(err));
  },
  methods: {
    CheckText() {
      var l = this.typedata.length;
      console.log([this.typedata, this.textdata.slice(0, l)]);
      if (this.typedata === this.textdata.slice(0, l)) {
        console.log("good");
      } else {
        console.log("wrong");
        //TODO
        // (hello, world).split("");
        // ["hello,", "world"]

        // The Justice for Myanmar
        // The Justice for Myanmar website was blocked in Myanmar on August 27 for allegedly spreading ‘fake news’. The website was launched on April 28 by a ‘covert group of
        // The JusTice for Mayanmar
        //     ^^^^^^^
      }
    }
  },
  computed: {}
};
</script>

<style>
</style>
