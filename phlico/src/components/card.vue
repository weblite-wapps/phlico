<template>
  <div
    :style="card">
    <!--Heart-->
    <span
      id="heart"
      @click="liked = !liked"
      :class="{'unlike': (!liked), 'like': (liked)}">❤</span>
    <!--Notification-->
    <span class="nav-pop-ups">
      <!--click emmit to show comments-->
      <img
        src="../assets/logo/commentBox.png"
        :class="['logo', {'pop-up': (popupCommentBox)}]"
        @click="">
      <!--Click emmit to show add comment page-->
      <img
        src="../assets/logo/addComment.png"
        class="logo pop-up"
        @click="">
    </span>
  </div>
</template>

<script>
export default {
  name: 'card',
  data() {
  	return {
  		card: {
  			'backgroundImage': this.get('img/- (7).jpg'),
  			'width': '400px',
  			'height': '400px',
        'boxShadow': '0 2px 1px rgba(0,0,0, .3)'
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
  		},

  	  popupCommentBox: true,
      popupAddComment: true,
  	}
  },

  methods: {
  	get: function(name) {
  	  const domain = "http://localhost:3000/"
  		return `url('${domain}${name}')`
  	}
  }
}
</script>

<style scoped>
  #heart {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
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
    opacity: .8;
    color: #fff;
    background-color: rgba(227,38,55,0.63);
    box-shadow: 0 1px 1px 0 rgba(0,0,0, .7);
    text-shadow: 0 1.5px 0 rgba(0,0,0, .7);
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
  .nav-pop-ups {
    width: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    bottom: -350px;
  }
  .logo {
    width: 45px;
    height: auto;
    transition: all .3s ease-in-out;
    opacity: 0;
    cursor: pointer;
  }
  .pop-up {
    opacity: 1;
  }
</style>
