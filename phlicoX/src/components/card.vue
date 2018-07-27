<template>
  <div class="card">
    <div :style="card">
      <span
        v-if="!canDelete"
        id="heart"
        @click="changeLikeState"
        :class="{'unlike': (!liked), 'like': (liked)}"><i id="heart">favorite</i></span>
    </div> <!-- card -->

    <div  class="icons">      
      <div class="row">
        <div
          id="send">
            <i>send</i>
        </div>

        <div 
          id="comment"
          @click="changeState">
            <i>insert_comment</i>
        </div>

        <div 
          v-if="canDelete"
          @click="removePhoto"
          id="delete">
            <i>delete</i>
        </div>
        <a 
          id="download"
          :href="getOriginalPhoto()">
            <i>get_app</i>
        </a>
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
      this.imageName = this.imageName
      this.liked = this.likeState
      this.card = {
        'backgroundImage': `url('${this.getPhoto()}')`,
        'backgroundSize': 'Contain',
        'backgroundRepeat': 'no-repeat',
        'backgroundColor': 'rgb(255,50,39)',
        'width': '320px',
        'height': '320px',
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
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-shadow: 0 1px 1px rgba(0,0,0, .3);

  }
  #heart {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 15px;
    font-size: 16px;
    cursor: pointer;
    transition: all .3s;
  }
  .unlike:hover {
    opacity: 1;
  }
  .unlike {
    border: 1.3px solid white;
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
    border: none;
    text-shadow: 1px 2px 1px rgba(208, 208, 208, .5);
    border-radius: 100px;
    width: 0px;
    height: 0px;
    color: #F70A31;
    opacity: 1;
  }
  .icons {
    display: flex;
    justify-content: space-between;
    width: 250px;
    margin-bottom: 5px;
    color: #A7A7A7;
  }
  .right {
    display: flex;
    align-self: flex-end;
  }
  .left {
    display: flex;
    align-self: flex-start; 
  }
  .icons a {
    text-decoration: none;
    color: #A7A7A7;
  }
  .row {
    display: flex;
    width: 100%;
    justify-content: space-between
  }
  #delete {
    transition: color .3s ease;
  }
  #delete:hover {
    color: #F93C2E;
  }
  #send {
    transition: color .3s ease;
  }
  #send:hover {
    color: #09832B;
  }
  #download {
    transition: color .3s ease;
  }
  #download:hover {
    color: #0A77B6;
  }
  #comment {
    transition: color .3s ease;
  }
  #comment:hover {
    color: #E17B0E;
  }
</style>

