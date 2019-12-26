<template>
  <div class="row mx-0 justify-content-center">
    <div id="contact" class="col-12 col-lg-10 col-xl-8 p-5">
      <div class="my-5"></div>
      <div class="row mx-0 justify-content-center">
        <h1>Contact Me</h1>
      </div>
      <div class="row my-4"></div>
      <div class="row mt-5 justify-content-between">
        <div class="col-12 mb-3 p-0 col-md-4 d-flex align-items-center">
          <div
            class="mark-con mr-3 d-flex justify-content-center align-items-center text-white"
          >&prop;</div>
          <div>
            <span class="bold">PHONE</span>
            <br />
            <span class="bold">(+66) 94 148 8594</span>
          </div>
        </div>
        <div class="col-12 mb-3 p-0 col-md-4 d-flex align-items-center">
          <div
            class="mark-con mr-3 d-flex justify-content-center align-items-center text-white"
          >&times;</div>
          <div>
            <span class="bold">LOCATION</span>
            <br />
            <span class="bold">54/54 Pattaya Thailand</span>
          </div>
        </div>
        <div class="col-12 mb-3 p-0 col-md-4 d-flex align-items-center">
          <div
            class="mark-con mr-3 d-flex justify-content-center align-items-center text-white"
          >&#8755;</div>
          <div>
            <span class="bold">E-MAIL</span>
            <br />
            <span class="bold">choengchaip@gmail.com</span>
          </div>
        </div>
      </div>
      <div class="row my-4"></div>
      <div class="row mt-5 justify-content-between">
        <div class="col-12 mb-3 d-flex justify-content-start p-0 col-md-6">
          <div class="small-input px-3">
            <input type="text" placeholder="Name" />
          </div>
        </div>
        <div class="col-12 mb-3 d-flex justify-content-end p-0 col-md-6">
          <div class="small-input px-3">
            <input type="text" placeholder="E-mail" />
          </div>
        </div>
        <div class="col-12 p-0 mb-5">
          <div class="big-input px-3 py-2">
            <textarea placeholder="Message"></textarea>
          </div>
        </div>
        <div class="col-12 d-flex justify-content-center align-items-center">
          <div class="singh-button my-5">
            <span class="text-white">Send Message</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContactContent"
};
</script>

<style scoped>
.singh-button {
  width: 9em;
  height: 3em;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #343434;
}
.singh-button span {
  font-size: 1em;
}
.small-input {
  width: 95%;
  height: 2.75em;
  border: 1px solid #c5c5c5;
}
.big-input {
  width: 100%;
  height: 14em;
  border: 1px solid #c5c5c5;
}
.big-input textarea {
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
  resize: none;
}
.small-input input {
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
}
.mark-con {
  height: 4em;
  width: 4em;
  background-color: #141414;
  border-radius: 50%;
}
.bold {
  font-weight: bold;
}
h3 {
  font-weight: bold;
}
span {
  font-size: 0.8em;
}
@media only screen and (max-width: 767px) {
  .small-input {
    width: 100%;
  }
}
</style>