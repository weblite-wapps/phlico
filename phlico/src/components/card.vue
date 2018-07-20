<template>
  <div>
			<div 
				@mouseover=""
				:style="card">
			</div>
				<span 
					id="heart" 
					@click="liked = !liked"
					:class="{'unlike': (!liked), 'like': (liked)}">❤</span>
  </div>
</template>

<script>
export default {
  name: 'card',
  data() {
  	return {
  		card: {
  			'backgroundImage': 'url(' + this.get() + ')',
  			'backgroundSize': 'contain',
  			'backgroundRepeat': 'no-repeat',
  			'width': '100%',
  			'height': '450px',
  			'border-bottom': '4px solid #f2624a',
  		},
  		liked: false,
  		image: {
  			info: {
  				title: "in The Sea",
  				caption: "my first photo in this weblite application",
  			},
  			user: {
  				name: "amirhe",
  			}
  		}
  	}
  },

  methods: {
  	get: function() {
  		return require('../assets/test/picture.jpg')
  	}
  }
}
</script>

<style scoped>
.container {
	width: 100%;
	height: 100%;
	/* background-color:red; */
} 

#heart {
	display: flex;
	align-items: center;
	justify-content: center;
	float: right;
	margin: 15px;
	font-size: 20px;
	cursor: pointer;
	transition: all .3s;
}
.unlike:hover {
	opacity: 1;
}
.unlike {
	border: 2px solid white;
	border-radius: 100px;
	width: 40px;
	height: 40px;
	opacity: .7;
	color: white;
	box-shadow: 0 1px 1px 0 rgba(0,0,0, .3);
	text-shadow: 0 2px 0 rgba(0,0,0, .3);
}
.like {
	border: 1px solid white;
	text-shadow: 1px 2px 1px rgba(208, 208, 208, .5);	
	border-radius: 100px;
	width: .1px;
	height: .1px;
	color: #F70A31;
	opacity: 1;
}
</style>