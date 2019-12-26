<template>
  <div id="app">
    <WelcomePage/>
    <div class="container-fluid position-absolute" style="z-index: 998">
      <TopBar />
    </div>
    <div class="container-fluid">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import TopBar from "./Pages/Components/TopBar";
import WelcomePage from './Pages/WelcomePage';
export default {
  name: "app",
  components: {
    TopBar,
    WelcomePage
  },
};
</script>

<style scoped>
  #app{
     z-index: 992;
  }
</style>
