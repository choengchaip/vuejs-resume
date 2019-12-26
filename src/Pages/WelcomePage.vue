<template>
  <div class="container-fluid welcome-con bg-white fade">
    <div class="image">
      <img class="h-100" src="./../assets/logo.png" />
    </div>
    <div>
        <h1>Made with VueJS</h1>
    </div>
    <div>
        <h6>By Choengchai Phachonyut</h6>
    </div>
  </div>
</template>

<script>
export default {
  name: "WelcomePage"
};
</script>

<style scoped>
.image {
  height: 200px;
}
.welcome-con {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  opacity: 1;
  z-index: 999;
}
.fade {
  opacity: 0;
  animation-name: fading;
  animation-duration: 4s;
  z-index: -1;
}
@keyframes fading {
  0% {
    opacity: 0;
    z-index: 999;
  }
  25% {
    opacity: 1;
  }
  70% {
    opacity: 1;
  }
  99%{
     z-index: 999;
  }
  100% {
    opacity: 0;
     z-index: -1;
  }
}
</style>