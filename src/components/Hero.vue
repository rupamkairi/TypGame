<template>
  <div>
    <h1>Hero Component</h1>
    <h1>...</h1>
    <h3>Change Counter with Vuex mutation</h3>
    <div>
      <span class="text-h5 font-weight-bold">Count:</span>
      <span class="text-h3 font-weight-black">{{ valueCount }}</span>
    </div>
    <div>
      <v-btn color="primary" @click="incrementCount">Increment Count</v-btn>
      <v-btn color="error" @click="decrementCount">Decrement Count</v-btn>
    </div>
    <div>
      <v-btn color="warning" @click="flushCount">Flush Count</v-btn>
    </div>
  </div>
</template>

<script>
export default {
  name: "Hero",
  data() {
    return {
      valueCount: null
    };
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
    }
  },
  computed: {}
};
</script>

<style>
</style>
