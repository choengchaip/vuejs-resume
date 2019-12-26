<template>
  <div  id="home" class="row singh-outter-bg">
    <div class="col-12 singh-inner-bg p-0"></div>
    <div class="ontop col-12 p-0">
      <MiddleContent/>
      <AboutContent />
      <ProjectContent />
      <ContactContent />
      <FooterContent />
    </div>
  </div>
</template>

<script>
import MiddleContent from "./Components/MiddleContent";
import AboutContent from "./Components/AboutContent";
import ProjectContent from './Components/ProjectContent';
import ContactContent from './Components/ContactContent';
import FooterContent from './Components/FooterContent';

export default {
  name: "HomePage",
  components: {
    MiddleContent,
    AboutContent,
    ProjectContent,
    ContactContent,
    FooterContent
  }
};
</script>

<style scoped>
.singh-outter-bg {
  background-image: url("./../assets/bg.jpg");
  background-size: cover;
  height: 100vh;
  background-attachment: fixed;
  background-repeat: repeat;
  background-color: black;
}
.singh-inner-bg {
  background-color: black;
  opacity: 0.3;
  z-index: 992;
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
}
.ontop {
  z-index: 993;
}
</style>