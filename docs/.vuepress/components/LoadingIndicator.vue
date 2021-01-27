<template>
  <div style="width: 100%; height: 100%; display: flex; align-items: center; justify-content: center;">
    <div class="loader"></div>
  </div>
</template>

<style scoped>
.loader,
.loader:after {
  border-radius: 50%;
  width: 7em;
  height: 7em;
}
.loader {
  display: flex;
  font-size: 10px;
  position: relative;
  border-top: 4px solid #00417033;
  border-right: 4px solid #00417033;
  border-bottom: 4px solid #00417033;
  border-left: 4px solid #004170;
  -webkit-transform: translateZ(0);
  -ms-transform: translateZ(0);
  transform: translateZ(0);
  -webkit-animation: load8 1.1s infinite linear;
  animation: load8 1.1s infinite linear;
}
@-webkit-keyframes load8 {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
@keyframes load8 {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
</style>
