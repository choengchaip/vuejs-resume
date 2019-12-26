<template>
  <div class="row topbar-container">
    <div id="topbar" class="topbar-container col-12 p-0 in-active">
      <div class="col-lg-1 col-0"></div>
      <div class="col-5 d-flex justify-content-start align-items-center">
        <div class="name-container d-flex justify-content-start align-items-center">
          <span class="font bold">Choengchai</span>
        </div>
      </div>
      <div class="col-5 d-none d-md-flex justify-content-end">
        <div class="option-container d-flex justify-content-around align-items-center">
          <div @click="toPage('middle')" class="clickable h-100 d-flex align-items-center">
            <span class="font">Home</span>
          </div>
          <div @click="toPage('about')"  class="clickable h-100 d-flex align-items-center">
            <span class="font">About</span>
          </div>
          <div class="clickable h-100 d-flex align-items-center">
            <span class="font">Project</span>
          </div>
          <div class="clickable h-100 d-flex align-items-center">
            <span class="font">Contact</span>
          </div>
        </div>
      </div>
      <div class="col-5 d-flex d-md-none justify-content-end"> 
        <div class="h-100 d-flex justify-content-end align-items-center">
          <img id="menu" class="menu menu-inactive" src="../../assets/menu.svg">
        </div>
      </div>
      <div class="col-lg-1 col-0"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TopBar",
  methods: {
    handleScroll() {
      var target = document.getElementById("topbar");
      var menu = document.getElementById('menu');
      if (window.scrollY > 80) {
        target.classList.remove("in-active");
        target.classList.add("active");
        menu.classList.remove('menu-inactive');
        menu.classList.add('menu-active');
      } else {
        target.classList.remove("active");
        target.classList.add("in-active");
        menu.classList.remove('menu-active');
        menu.classList.add('menu-inactive');
      }
    },
    toPage(value){
      window.location.href = `#${value}`;
    }
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  }
};
</script>

<style scoped>
.menu{
  height: 30%;
}
.clickable{
  cursor: pointer;
}
.topbar-container {
  height: 5em;
}
.in-active {
  display: flex;
  position: fixed;
  animation-name: hiding;
  animation-duration: 0.5s;
  background-color: transparent;
  color: white;
}
.active {
  display: flex;
  position: fixed;
  animation-name: showing;
  animation-duration: 0.5s;
  background-color: white;
  color: #141414;
  height: 4em;
  border-bottom: 1px solid #c5c5c5;
}

.bold {
  font-weight: bold;
}
.font {
  font-size: 1.25em;
}
.option-container {
  width: 25em;
}
.name-container {
  width: 15em;
}
.menu-active{
  filter: invert(0%);
}
.menu-inactive{
  filter: invert(100%);
}
@keyframes menu-showing {
  0%{
     filter: invert(0%);
  }
  100%{
     filter: invert(100%);
  }
}
@keyframes menu-hiding {
  0%{
    filter: invert(100%);
  }
  100%{
    filter: invert(0%);
  }
}
@keyframes showing {
  0% {
    height: 5em;
    display: flex;
    position: fixed;
    animation-name: hiding;
    animation-duration: 0.5s;
    background-color: transparent;
    color: white;
  }
  100% {
    height: 4em;
    display: flex;
    position: fixed;
    animation-name: showing;
    animation-duration: 0.5s;
    background-color: white;
    color: #141414;
  }
}
@keyframes hiding {
  0% {
    background-color: white;
    color: #141414;
    height: 4em;
  }
  100% {
    height: 5em;
    display: flex;
    position: fixed;
    animation-name: hiding;
    animation-duration: 0.5s;
    background-color: transparent;
    color: white;
  }
}
.option-container a {
  text-decoration: none;
}
</style>