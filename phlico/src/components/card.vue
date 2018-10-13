<template>
  <div
    :style="card">
    <!--Heart-->
    <span
      id="heart"
      @click="changeState('like')"
      :class="heartClass"><i>favorite</i></span>
    <!--Notification-->
    <span class="nav-pop-ups">
      <img
        src="../assets/logo/comment.png"
        id="comment-icon"
        @click="changeState('comments')">
    </span>
  </div>
</template>

<script>
  import config from "../config"

  const domain = config.server

  export default {
    name: 'card',

    props: {
      imageName: String,
      likeState: {
        type: Boolean,
        required: true,
      }
    },

    data() {
      return {
        card: {
          'backgroundSize': 'Contain',
          'backgroundRepeat': 'no-repeat',
          'backgroundColor': 'rgb(94,94,94)',
          'width': '400px',
          'height': '400px',
        },
      }
    },

    computed: {
      heartClass() { return this.likeState ? 'like': 'unlike' },
    },

    created() {  },

    methods: {
      getPhoto() {  return `${domain}/img/Sqr_${this.imageName}` },

      changeState(event) {
        if (event === 'like' && !this.likeState) this.$emit('like')
        if (event === 'comments') this.$emit('state', event)
      },
    },

    watch: {
      imageName() {
        this.card = {
          'backgroundImage': `url('${this.getPhoto()}')`,
          'backgroundSize': 'Contain',
          'backgroundRepeat': 'no-repeat',
          'backgroundColor': 'rgb(94,94,94)',
          'width': '400px',
          'height': '400px',
        }
      },
    },

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
    border: 1.3px solid #F7F7F7;
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
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    position: relative;
    bottom: -350px;
    margin: 0 auto;
  }
    #heart {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 15px;
    cursor: pointer;
    font-size: 12px;
    transition: all .3s;
  }
  #comment-icon {
    width: 40px;
    margin-right: 10px;
    cursor: pointer;
  }
</style>
