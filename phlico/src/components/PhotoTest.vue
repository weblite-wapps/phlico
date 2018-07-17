<template>
 <div id="base">
		<!-- baseImage (Image) -->
		  <img 
  			@click="show_footer = true"
				data-label="baseImage"
		  	id="base-image"  
		  	src="../helper/images/phlico_main/baseimage_u1.jpg"/>

		<!-- Footer (Group) -->
		<div 
			:class="[{'show-footer': (show_footer)}, 'footer']">
		  	<!-- id="u3"  -->

		  <!-- userProfile (Ellipse) -->
<!-- 		  <div 
		  	class="user-profile"
		  	data-label="userProfile">
		    <img 
		    	id="u3_img"  
		    	src="../helper/images/phlico_main/userprofile_u3.png"/>
		  </div> -->
		  <div class="caption">
		  	<p class="catption-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
		  	tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
		 occaecat cupidatat non
		  	proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
		  </div>

			<div class="icons">
			  <!-- closeIcon (Shape) -->
			  <div 
					class="close-icon"
					@click="show_footer = false"
			  	idata-label="closeIcon">
			    <img src="../helper/images/phlico_main/closeicon_u6.png"/>
			  </div>

			  <!-- comment-like -->
				<div class="comment-like">	
					  <!-- commentsIcon (Shape) -->
				    <img 
				    	data-label="commentsIcon"
				    	class="comment-icon"
				    	@click="showComments"
				    	src="../helper/images/phlico_main/commentsicon_u4.png"/>					
					    <!-- like-icon -->
					    <h3
  					    data-label="likeIcon"
  					    @click="liked = !liked"
				    		:class="[{'liked': (liked)}, 'like-icon']" >❤</h3>
			</div> <!-- comment-like -->
			</div> <!-- icons -->
    </div> <!-- Footer (Group) -->
    <!-- <input type="date" name="a"> -->
  </div>
</template>

<script>
	export default {
	  name: 'PhotoTest',
	  data() {
	  	return {
	  		show_footer: false,
	  		show_comments: false,
	  		liked: false,
	  	}
	  },
	  methods: {
	  	showComments: function() {
	  		this.$emit('comment', this.liked);
	  	}
	  }
	}
</script>

<style scoped>

	body {
	  margin:0px;
	  background-image:none;
	  position:static;
	  left:auto;
	  margin-left:0;
	  margin-right:0;
	  text-align:left;
	}

	#base-image {
	  border-width:0px;
	  /* position:absolute; */
	  left:0px;
	  top:0px;
	  width:350px;
	  height:350px;	  
	}

	#base {
	  background-color: red;
		display: flex;
		justify-content: center;
		align-items: flex-end;
	  position: absolute;
	}

	.footer {
		display: flex;
		justify-content: space-between;
		align-items: flex-end;
		position: absolute;
		/* z-index: 1; */
		/* bottom: 1px; */
		/* animation */
		transition: all .3s ease-in;		
		opacity: 0;
		transform: translateY(+10px);
	}

	.footer.show-footer {
		/* animation */
		transition: all .3s ease-in;		
		transform: translateY(-10px);
		opacity: 1;
	}

/* 	.user-profile {
		width: 50px;
		height: 50px;
		border-radius: 50px;
		margin-left: 10px;
	} */

	.icons {
		margin-right: 10px;
		display: flex;
		flex-direction: column;
		align-items: flex-end;
	}

	.comment-like {
		/* margin-top: 15px; */
		display: flex;
		align-items: center;
	}

	.like-icon{
		color: white;
		margin-left: 15px;
		margin-top: 0;
		margin-bottom: 0;
		cursor: pointer;
	}
	.comment-icon {
		cursor: pointer;
		transition: all .3s ease-in;
		transform: scale(1);
	}
	.comment-icon:hover {	
		transform: scale(1.2);
	}
	.close-icon {
		cursor: pointer;
		transition: all .2s ease-in-out;
		transform: rotate(0);
	}
	.close-icon:hover {
		transform: rotate(90deg);
		
	}
	.liked{
		color: red;
		animation-name: scaleup;
		animation-duration: .6s;
		animation-delay: .1s;
		animation-iteration-count: 2;
		animation-direction: reverse;
	}

	@keyframes scaleup {
		0% {transform: scale(1);}
		75% {transform: scale(1.5);}
		100% {transform: scale(1);}
	}


</style>