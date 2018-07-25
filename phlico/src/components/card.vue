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
      <!--Click emmit to show add comment page-->
      <img
        src="../assets/logo/commentBox.png"
        :class="['logo', {'pop-up': (popupCommentBox)}]">
      <img
        src="../assets/logo/addComment.png"
        class="logo pop-up"
        @click="changeState()">
    </span>
  </div>
</template>

<script>
export default {
  name: 'card',
  data() {
  	return {
      name: '',
      card: {},
      liked: false,
  	  popupCommentBox: true,
      popupAddComment: true,
  	}
  },

  created() {
    this.name = this.$props.imageName
    this.card = {
      'backgroundImage': `url('${this.getPhoto()}')`,
      'backgroundSize': 'Contain',
      'backgroundRepeat': 'no-repeat',
      'backgroundColor': 'rgb(255,50,39)',
      'width': '400px',
      'height': '400px',
      'margin': '10px 0',
      'boxShadow': '0 2px 1px rgba(0,0,0, .3)'
    }
  },

  methods: {
  	getPhoto: function() {
      const domain = "http://localhost:3000/img/"
      return `${domain}Sqr_${this.name}`
  	},
    changeState: function() {
  	  console.log("clicked")
      this.$emit('state', 'comments')
    },

  },

  props: {
    imageName: String,
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
