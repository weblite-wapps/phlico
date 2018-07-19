<template>
  <div>
  	<h3 class="container">{{title}}</h3>
  	<div class="arrow">
  		<div class="not"></div>
	  	<div class="logo"></div>
  		<div class="not"></div>
  	</div>
  </div>
</template>

<script>
export default {
  name: 'appheader',
  
  data() {
  	return {}
  },
  props: {
  	title: String
  }

}
</script>

<style scoped>
	.container {
		background-color: #323232;
		text-align: center;
	}
	h3 {
		margin: 0 auto;
		color: white;
	}
	.arrow {
		display: flex;
		height: 20px;
		justify-content: space-between;
	}
	.logo {
		position: relative;
		z-index: -1;
		width: 15px;
		height: 100%;
		background-color: #323232;
		border-radius: 50px;
		margin-top: -10px;
	}

</style>