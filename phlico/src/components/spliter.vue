<template>
	<div class="on-the-line">
		<slot></slot>
	</div>
</template>

<script>
	export default {
	  name: 'spliter',

	  data() {
	    return {

	    }
	  },
	}
</script>

<style scoped>
.on-the-line {
  font-size: 21px;
  font-family: 'sans-serif';
  margin: 20px 0;
  color: #252a3e;
  text-align: center;
}
.on-the-line::after,
.on-the-line::before {
  border-top: solid 1.3px #252a3e;
  content: '';
  display: inline-block;
  margin: 0 12px 3px;
  width: 30%;
  color: #252a3e;
}
</style>
