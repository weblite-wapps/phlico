<template>
  <div class="comments">

    <!-- Caption -->
    <div class="my-caption">
        <span class="bigger">{{caption.username}}</span>
      <div>
        <p>{{caption.text}}</p>
        <span 
          class="bigger"
          id="like">{{likes}} ❤</span>
      </div>
    </div>

    <!-- Get Comment -->
    <get-comments
      :send="send"
      @state="changeState"
      :deleteShow="caption.username === user"/>
    
    <!-- Comments -->
      <comment
        v-for="(item, index) in this.comments"
        :key="index"
        :comment="item"/>
      <loading v-if="!hasComment"/>
  </div>
</template>

<script>
  import comment from './comment'
  import loading from './loading'
  import getComments from './getComments'

  export default {
    name: "comments",
    
    props: {
      comments: Array,
      caption: Object,
      user: String,
      send: Function,
    },

    components: {
      comment,
      loading,
      'get-comments': getComments,
    },

    methods: {
      changeState(event) {
        this.$emit('state', event)
      },
    },

    computed:{
      hasComment() {
        return this.comments.length !== 0
      },

      likes() {
        return this.caption.likes || ''
      },
    },

  }
</script>

<style scoped>
  .my-caption {
    text-align: center;
    width: 300px;
    margin: 0 auto 15px auto;
    color: #D6D6D6;
    font-size: 11px;
    font-family: sans-serif;
    background-color: rgba(91, 83, 84, 0.14);
    border-radius: 4px;
    box-shadow: 0 1px 1px rgba(0, 0, 0, .15);
    flex-wrap: wrap;
    overflow-x: hidden;
  }
  .bigger {
    font-size: 12px;
  }
  #like {
    color: #FC3939;
  }
  .comments {
    width: 100%;
    height: 348px;
    margin: 10px auto;
    overflow: auto;
    box-shadow: 0 0 1px rgba(255,255,255, .6);
    
  }
  .comments::-webkit-scrollbar-track
  {
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
    border-radius: 1px;
    width: 5px;
    background-color: #2c3e50;
  }
  .comments::-webkit-scrollbar
  {
    width: 4px;
    background-color: #2c3e50;
  }
  .comments::-webkit-scrollbar-thumb
  {
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
    background-color: #CACACA;
  }
</style>
