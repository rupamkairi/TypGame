<template>
  <div>
    <v-row>
      <v-col cols="12" sm="6">
        <v-textarea
          class="text-h6 font-weight-thin"
          disabled
          solo
          no-resize
          auto-grow
          v-model="textdata"
        ></v-textarea>
      </v-col>
      <v-col cols="12" sm="6">
        <v-textarea
          class="text-h6 font-weight-regular"
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
export default {
  name: "Hero",
  data() {
    return {
      height: 0,
      textdata: "",
      typedata: ""
    };
  },
  mounted() {
    console.log("mount");
    let baseUrl = location.protocol + "//" + location.host;
    let Url = baseUrl + "/api/random";
    console.log(Url);
    fetch(Url)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        this.textdata = data.text;
      })
      .catch(err => console.log(err));

    console.log(this.textdata);
  },
  methods: {
    incrementCount() {
      this.$store.commit("increment");
      this.valueCount = this.$store.state.count;
    },
    decrementCount() {
      this.$store.commit("decrement");
      this.valueCount = this.$store.state.count;
    },
    flushCount() {
      this.$store.commit("flush");
      this.valueCount = this.$store.state.count;
    },
    CheckText() {
      // console.log('changes')
      // console.log(this.textdata);
      // console.log(this.typedata);
      var l = this.typedata.length;
      console.log([this.typedata, this.textdata.slice(0, l)]);
      if (this.typedata === this.textdata.slice(0, l)) {
        console.log("good");
      } else {
        console.log("wrong");
      }
    }
  },
  computed: {}
};
</script>

<style>
</style>
