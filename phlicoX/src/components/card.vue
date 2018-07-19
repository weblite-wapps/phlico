<template>
  <li class="card">
  	<div
  		:class="['card-image', {'is-loaded': (present.load)}]"
  		:style="{backgroundImage: present.info.src}"
  		@mouseover="load()">
			<img :src="present.info.src" :alt="present.info.name" @click="next()">
		</div>
  	<!-- <a 
  		:class="['card-image', {'is-loaded': (present.load)}]"
  		:href='present.info.path'
  		:style="{backgroundImage: present.info.src}"
  		:data-image-full="present.info.src"
  		@mouseover="load()">
			<img :src="present.info.src" :alt="present.info.name" @click="next()">
		</a> -->
		<a 
			class="card-footer"
			:href="present.info.path">
			<h3>{{present.footer.title}}</h3>
			<p>{{present.footer.discription}}</p>		
			<p class="like">{{present.footer.likes}} <span>❤</span></p>
		</a>			
  </li>
</template>

<script>
export default {
  name: 'card',
  
  data() {
  	return {
  		objects: [],
  		present: '',
  		index: 0,
  	}
  },
  
  created() {
  	// initliza value
  	//--sbfix check wheter exist or not ? should behandled

		// this.objects = this.$props.images  	
	this.objects = this.$props.images.map((image) => ({
				info: {
					src: require('../assets/images/'+image.info.src),
					path: image.info.path,
					name: image.info.name,
				},
		  	footer: {
		  		title: image.footer.title, 
		  		discription: image.footer.discription,
			  	likes: 15,
		  	},
		  	load: false,	
  	}))
  
  	this.present = this.objects[0]
  },
  methods: {
  	load: function() {
  		this.present.load = true
  	},
  	next: function() {
  		this.index = (this.index + 1) % this.objects.length
  		this.present = this.objects[this.index]
  	}
  },
  props: {
  	images: {
  		type: Array,
  		required: true,
  	}
  },
}
</script>

<style scoped>
	/* Card */
	.card {
		display: inline-block;]
		height: 100%;
		max-width: 340px;
		margin: 1rem;
		font-size: 1rem;
		text-decoration: none;
		overflow: hidden;
		box-shadow: 0 0 3rem -1rem rgba(0, 0, 0, .5);
		transition: transform .1s ease-in-out, box-show .3s;
	}
	.card:hover {
		transform: translateY(-.5rem) scale(1.0125);
		box-shadow: 0 .5rem 3rem -1rem rgba(0, 0, 0, .5);
	}
	/* Card image Style */
	.card-image {
		display: block;
		/* min-height: 314.98px; */
		background: #fff center center no-repeat;
		background-size: cover;
		filter: blur(4px);
	}	 
	.card-image.is-loaded {
		filter: none;
		transition: filter 1.5s;
	}
	.card-image > img {
		display: block;
		width: 100%;
		/* opacity: 0; */
	}
	/* Card Footer Style */
	.card-footer {
		display: block;
		padding: 1rem .5rem;
		color: #515151;
		text-decoration: none;
	}
	.card-footer > p > h2{
		margin: 0;
	}
	/* like */
	.like {
		display: flex;
		justify-content: flex-end;
		margin-right: 5px;
		font-weight: bold;
	}
	.like > span {
		color: #F12626;
	}
</style>