<template>
  <div class="on-the-line">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'spliter',

  data() {
    return {}
  },
}
</script>

<style scoped>
.on-the-line {
  font-size: 21px;
  font-family: 'sans-serif';
  margin: 10px 0;
  color: #fff;
  text-align: center;
}
.on-the-line::after,
.on-the-line::before {
  border-top: solid 1.3px #97989d;
  content: '';
  display: inline-block;
  margin: 0 12px 3px;
  width: 30%;
}
</style>