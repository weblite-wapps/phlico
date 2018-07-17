<template>
  <div class="container">
    <div class="Sender">
      <!-- user commetn and tags and diffrent style -->
    </div>
    <div v-for="(comment, key) in userComments" >
      <single-comment :comment="comment" :theme="selectTheme(key)"/>
    </div>
    <div class="footer">
      <h2 
        class="back-button"
        @click="showPhoto">
        ⤵
      </h2>     
    </div>
  </div>
</template>

<script>
  import Comment from './Comment.vue'
  export default {
    name: "comments",
    data: function() {
      return {
        show_footer: false,
        themes:['dark', 'blue', 'light', 'red']
      }
    },
    props: {
      userComments: {
        type: Object,
        required: true,
      },
    },
    components: {
      'single-comment': Comment,
    },
    methods: {
      selectTheme: function(key) {
        return this.themes[(key+Math.floor(Math.random()*100))%this.themes.length]+'-theme'
      },
      showPhoto: function() {
        this.$emit('photo', 'backtoPhoto')
      }
    }
  }
</script>

<style scoped>.
  .container {
    /* display: flex; */
  }
  .user-profile {
    background-color: deepskyblue;
    border-radius: 50px;
    font-size: 8px;

  }
  .comment-text {
    margin-top: 0;
    background-color: deepskyblue;
    border-radius: 50px;
    font-size: 10px;
    padding: 5px;
  }
  .footer {
    display: flex;
    width: 650px;
    justify-content: flex-end;
  }
  .back-button {
    cursor: pointer;
  }
  .back-button:hover {
    animation-name: ziggle;
    animation-duration: .6s;
    animation-iteration-count: 2;
    animation-direction: reverse;
  }
  @keyframes ziggle {
    0% {transform: rotate(0);}
    50% {transform: rotate(-20deg);}
    100% {transform: rotate(0);}
  }
</style>
