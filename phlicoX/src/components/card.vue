<template>
  <li class="card">
  	<div
  		:class="['card-image', {'is-loaded': (present.load)}]"
  		:style="{backgroundImage: present.info.src}"
  		@mouseover="load()">
			<img :src="present.info.src" :alt="present.info.name" @click="next()">
		</div>
		<div class="card-footer">
			<p>{{present.footer.discription}}</p>
      <div class="nav">
        <div class="logos">
          <!-- SendPhoto Method Should be send and get request from server-->
          <!-- show Comments emit this event -->
          <img src="../assets/icons/return.png" alt="Send to inline" class="logo" @click="sendPhoto()">
          <img src="../assets/icons/comment.png" alt="Messages" class="logo" @click="showComments()">
        </div>
  			<p class="like-number">{{present.footer.likes}}<img src="../assets/icons/likeicon.png" alt="Like" id="heart"></p>
      </div>
    </div>
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
			  	likes: 315,
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
    background-color: rgba(1,1,1,0.1);
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
    display: flex;
    flex-direction: column;
		color: #515151;
		text-decoration: none;
	}
	.card-footer > p{
		margin: 10px 0 3px 0;
    font-size: 12px;
    color: #c94c13;
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
  .nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 5px;
  }
  .like-number {
    display: flex;
    align-items: center;
    font-size: 15px;
    font-weight: bold;
    color: white;
    text-shadow: 1.1px 1.4px 0 rgba(7, 1, 2, 0.63);
  }
  .logo {
    width: 40px;
    height: 40px;
    margin: 0 5px;
    cursor: pointer;
  }
  #heart {
    width: 15px;
    height: 15px;
    margin: 0 5px;
  }
</style>
