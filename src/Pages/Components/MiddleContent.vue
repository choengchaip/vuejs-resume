<template>
  <div id="middle" class="mid-con d-flex flex-column align-items-center justify-content-center">
    <div class="my-pic"></div>
    <div>
      <span class="font">Choengchai Phachonyut</span>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.mid-con {
    height: 100vh;
}
.my-pic {
  width: 12em;
  height: 12em;
  border-radius: 50%;
  background-image: url("./../../assets/mypic.jpg");
  background-size: 100%;
  border: 1px solid white;
}
.font {
  font-size: 2em;
  color: white;
}
</style>