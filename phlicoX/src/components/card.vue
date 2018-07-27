<template>
  <div class="card">
    <div :style="card">

      <div class="logos">
        <div class="flex">
          <a :href="getOriginalPhoto()">
            <img
            src="../assets/icons/download.png"
            alt="downlaod-logo"
            class="logo">
          </a>
    
          <img 
            v-if="canDelete"
            src="../assets/icons/delete.png"
            class="logo"
            id="delete"
            alt="delete icon"
            @click="removePhoto">

          <span
            v-else
            id="heart"
            @click="changeLikeState"
            :class="{'unlike': (!liked), 'like': (liked)}">❤</span>
        </div> <!-- top -->

        <div class="flex bot">
          <img
            src="../assets/icons/comment.png"
            class="logo"
            id="comment"
            alt="comment logo"
            @click="changeState">

          <img
            src="../assets/icons/send.png" 
            alt="send logo"
            class="logo"
            id="send">
        </div> <!-- bot -->
      </div> <!--logos-->

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
      this.imageName = this.imageName
      this.liked = this.likeState
      this.card = {
        'backgroundImage': `url('${this.getPhoto()}')`,
        'backgroundSize': 'Contain',
        'backgroundRepeat': 'no-repeat',
        'backgroundColor': 'rgb(255,50,39)',
        'width': '320px',
        'height': '320px',
        'boxShadow': '0 1px 1px rgba(0,0,0, .3)',
        'margin': '10px 0',
      }
    },

    methods: {
      getPhoto: function() {
        const domain = "http://localhost:3000/img/"
        return `${domain}Sqr_${this.imageName}`
      },

      getOriginalPhoto() {
        const domain = "http://localhost:3000/img/"
        return `${domain}${this.imageName}`
      },

      changeState: function() {
        this.$emit('state', 'comments')
      },

      changeLikeState: function() {
        if (!this.liked) {
          this.liked = true
          this.$emit('like')
        }
      },
  
      removePhoto: function() {
          this.$emit('del')
      },

    },

    props: {
      imageName: String,
      likeState: Boolean,
      canDelete: Boolean
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
    cursor: pointer;
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
    width: 0px;
    height: 0px;
    color: #F70A31;
    opacity: 1;
  }
  .logos {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .flex {
    display: flex;
    flex-direction:  row-reverse;
    justify-content: space-between;
  }

  #comment {
    margin-bottom: 5px;
    align-self: flex-end;
  }
  #send {
    width: 40px;
    align-self: flex-start;
  }
  #delete {
    width: 20px;
    height: 20px;
    margin: 5px 0 0 5px;
  }
</style>
