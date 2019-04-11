<template>
  <div class="sp sp-bars"></div>
</template>

<style scoped>
.sp {
  width: 32px;
  height: 32px;
  clear: both;
  margin: 20px auto;
}

/* Spinner Vortex */
/* Spinner Bars */
.sp-bars {
  position: relative;
  width: 10px;
  /* border: 1px rgb(208, 64, 202) solid; */
  border: 1px #7d7878 solid;
  background: #7d7878;
  -webkit-animation: spBars 1s infinite linear;
  animation: spBars 1s infinite linear;
}

.sp-bars:after,
.sp-bars:before {
  content: "";
  position: absolute;
  width: inherit;
  height: inherit;
  border: inherit;
  background: #7d7878;
  top: -1px;
}

.sp-bars:before {
  left: -20px;
  -webkit-animation: spBarsBefore 1s infinite linear;
  animation: spBarsBefore 1s infinite linear;
}

.sp-bars:after {
  right: -20px;
  -webkit-animation: spBarsAfter 1s infinite linear;
  animation: spBarsAfter 1s infinite linear;
}

@keyframes spBarsBefore {
  0% {
    transform: scale(1, 1);
  }
  25% {
    transform: scale(1, 1.25);
  }
  50% {
    transform: scale(1, 0.75);
  }
  75% {
    transform: scale(1, 1);
  }
  100% {
    transform: scale(1, 1);
  }
}
@keyframes spBars {
  0% {
    transform: scale(1, 1);
  }
  25% {
    transform: scale(1, 1);
  }
  50% {
    transform: scale(1, 1.25);
  }
  75% {
    transform: scale(1, 1);
  }
  100% {
    transform: scale(1, 1);
  }
}
@keyframes spBarsAfter {
  0% {
    transform: scale(1, 1);
  }
  25% {
    transform: scale(1, 1);
  }
  50% {
    transform: scale(1, 0.75);
  }
  75% {
    transform: scale(1, 1.25);
  }
  100% {
    transform: scale(1, 1);
  }
}
</style>
