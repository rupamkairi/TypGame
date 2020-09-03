<template>
  <v-app>
    <v-app-bar app light extension-height="75" color="grey lighten-3">
      <v-toolbar-title class="pa-5">
        <span class="font-italic headline font-weight-black">typ</span>
        <span class="headline font-weight-light">game</span>
      </v-toolbar-title>
    </v-app-bar>
    <v-main app>
      <v-container>
        <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",
  components: {}
};
</script>

<style>
#app {
  text-align: center;
}
</style>
