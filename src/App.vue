<template>
  <v-app>
    <p>App Component</p>
    <div>
      <router-link to="/">HOME</router-link>|
      <router-link to="/about">ABOUT</router-link>
    </div>
    <router-view></router-view>
  </v-app>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
#app {
  text-align: center;
}
</style>
