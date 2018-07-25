<template>
  <div class="card">
    <!--<img src="../assets/images/- (1).jpg" alt="">-->
    <div :style="card">
      <div class="logos">
        <div class="top">
          <a :href="getOriginalPhoto()">
            <img
            src="../assets/icons/download.png"
            alt="downlaod-logo"
            class="logo"></a>

          <span
            id="heart"
            @click="liked = !liked"
            :class="{'unlike': (!liked), 'like': (liked)}">❤</span>
        </div>

        <div class="bot">
          <img
            src="../assets/icons/comment.png"
            class="logo comment"
            alt="comment logo"
            @click="changeState()">
          <img
            src="../assets/icons/send.png" alt="send logo"
            class="send">

        </div>

      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'card',

  data() {
  	return {
      liked: false,
      name: '',
  	  card: {},
  	}
  },

  created() {
    this.name = this.$props.imageName
    this.card = {
      'backgroundImage': `url('${this.getPhoto()}')`,
      'backgroundSize': 'Contain',
      'backgroundRepeat': 'no-repeat',
      'width': '320px',
      'height': '320px',
      'boxShadow': '0 1px 1px rgba(0,0,0, .3)',
      'margin': '10px 0',
    }
  },

  methods: {
    getPhoto: function() {
      const domain = "http://localhost:3000/img/"
      return `${domain}Sqr_${this.name}`
    },

    getOriginalPhoto() {
      const domain = "http://localhost:3000/img/"
      return `${domain}${this.name}`
    },

    changeState: function() {
      this.$emit('state', 'comments')
    }
  },

  props: {
    imageName: String,
  }
}
</script>
<style scoped>
  .card {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .logo {
    margin: 5px 5px 0 0;
    width: 25px;
    /*height: 40px;*/
    float: right;
    transition: transform .3s ease-in-out;
    transform: scale(1);
  }
  .logo:hover {
    transform: scale(1.1);
  }
  #heart {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 15px;
    font-size: 15px;
    cursor: pointer;
    transition: all .3s;
  }
  .unlike:hover {
    opacity: 1;
  }
  .unlike {
    border: 2px solid white;
    border-radius: 100px;
    width: 30px;
    height: 30px;
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
  .logos {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .bot {
    display: flex;
    flex-direction:  row-reverse;
    justify-content: space-between;
  }
  .comment {
    margin-bottom: 5px;
    align-self: flex-end;
  }
  .send {
    width: 40px;
    align-self: flex-start;
    transition: transform .3s ease-in-out;
    transform: scale(1);
  }
  .send:hover {
    transform: scale(1.1);
  }
</style>
