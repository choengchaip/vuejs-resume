<template>
  <div class="row justify-content-center mx-0">
    <div id="about" class="col-12 col-lg-10 col-xl-8 bg-white p-5">
      <div class="my-5"></div>
      <h3 class="mb-4">Hello World!</h3>
      <span>
        My name is Choengchai Phachonyut
        <br />When I graduate, I want to be a
        <b>FullStack Developer</b>
        <br />I love to coding, to develop something big
        <br />And yes, as FullStack Developer I could do things I Loved!
        <br />
      </span>
      <div class="my-5"></div>
      <div class="row mx-0">
        <div class="col-12 col-md-6 p-0 d-flex item-con align-items-center">
          <img class="h-50" src="../../assets/email.svg" />
          <span class="pl-2 item-font bold">E-mail :</span>
          <span class="pl-2 item-font">choengchaip@gmai.com</span>
        </div>
        <div class="col-12 col-md-6 p-0 d-flex item-con align-items-center">
          <img class="h-50" src="../../assets/calendar.svg" />
          <span class="pl-2 item-font bold">Date of birth :</span>
          <span class="pl-2 item-font">9 May 1997</span>
        </div>
        <div class="col-12 col-md-6 p-0 d-flex item-con align-items-center">
          <img class="h-50" src="../../assets/lcoation.svg" />
          <span class="pl-2 item-font bold">Location :</span>
          <span class="pl-2 item-font">54/54 Pattaya Thailand</span>
        </div>
        <div class="col-12 col-md-6 p-0 d-flex item-con align-items-center">
          <img class="h-50" src="../../assets/phone.svg" />
          <span class="pl-2 item-font bold">Phone :</span>
          <span class="pl-2 item-font">(+66) 94 148 8594</span>
        </div>
        <div class="my-5"></div>
        <div class="social-con d-flex col-12 p-0">
          <a href="https://www.facebook.com/sing.choengchai" target="_blank" class="social">
            <img class="h-50 image" src="../../assets/facebook.svg" />
          </a>
          <a href="https://www.instagram.com/sigerline/" target="_blank" class="social">
            <img class="h-50 image" src="../../assets/ig.svg" />
          </a>
          <a href="https://twitter.com/" target="_blank" class="social">
            <img class="h-50 image" src="../../assets/twitter.svg" />
          </a>
        </div>
      </div>
      <div class="my-5"></div>
      <div class="row mx-0">
        <div class="col-12 p-0 mb-4">
          <div class="col-12 p-0 d-flex justify-content-between">
            <div>
              <span class="font item-font">HTML5, CSS, JS</span>
            </div>
            <div>
              <span class="font item-font">90%</span>
            </div>
          </div>
          <div class="mt-1 progress-con w-100 position-relative">
            <div class="progress-item" style="width: 90%;"></div>
          </div>
        </div>
        <div class="col-12 p-0 mb-4">
          <div class="col-12 p-0 d-flex justify-content-between">
            <div>
              <span class="font item-font">Flutter</span>
            </div>
            <div>
              <span class="font item-font">90%</span>
            </div>
          </div>
          <div class="mt-1 progress-con w-100 position-relative">
            <div class="progress-item" style="width: 90%;"></div>
          </div>
        </div>
        <div class="col-12 p-0 mb-4">
          <div class="col-12 p-0 d-flex justify-content-between">
            <div>
              <span class="font item-font">VueJS</span>
            </div>
            <div>
              <span class="font item-font">90%</span>
            </div>
          </div>
          <div class="mt-1 progress-con w-100 position-relative">
            <div class="progress-item" style="width: 90%;"></div>
          </div>
        </div>
        <div class="col-12 p-0 mb-4">
          <div class="col-12 p-0 d-flex justify-content-between">
            <div>
              <span class="font item-font">ReactJS</span>
            </div>
            <div>
              <span class="font item-font">40%</span>
            </div>
          </div>
          <div class="mt-1 progress-con w-100 position-relative">
            <div class="progress-item" style="width: 40%;"></div>
          </div>
        </div>
        <div class="col-12 p-0 mb-4">
          <div class="col-12 p-0 d-flex justify-content-between">
            <div>
              <span class="font item-font">Angular</span>
            </div>
            <div>
              <span class="font item-font">45%</span>
            </div>
          </div>
          <div class="mt-1 progress-con w-100 position-relative">
            <div class="progress-item" style="width: 45%;"></div>
          </div>
        </div>
        <div class="col-12 p-0 mb-4">
          <div class="col-12 p-0 d-flex justify-content-between">
            <div>
              <span class="font item-font">NodeJS</span>
            </div>
            <div>
              <span class="font item-font">90%</span>
            </div>
          </div>
          <div class="mt-1 progress-con w-100 position-relative">
            <div class="progress-item" style="width: 90%;"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.progress-item {
  position: absolute;
  left: 0;
  top: 0;
  background-color: #343434;
  height: 0.75em;
  border-radius: 8px;
}
.progress-con {
  height: 0.75em;
  background-color: grey;
  border-radius: 8px;
}
.item-font {
  font-size: 1em;
}
.bold {
  font-weight: bold;
}
h3 {
  font-weight: bold;
}
span {
  font-size: 1.25em;
}
.item-con {
  height: 2em;
}
.social {
  height: 2.5em;
  width: 2.5em;
  border-radius: 50%;
  border: 1px solid #141414;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 1em;
  cursor: pointer;
}
.social:hover {
  background-color: #d8d8d8;
  transition: all 0.5s ease-in-out;
}
</style>
