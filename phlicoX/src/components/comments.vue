<template>
  <div class="comments">

    <!-- Caption -->
    <!-- class="my-caption" -->
     <!-- class="user-info" -->
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
      :deleteShow="caption.username === user"/>
    <!-- @state="changeState" -->
    
    <!-- Comments -->
    <div v-if="hasComment">
        <comment
          v-for="(item, index) in this.comments"
          :key="index"
          :comment="item"/>
    </div>
    <!-- if it has no comment-->
    <loading v-else/>
  </div>
</template>

<script>
  import comment from './comment'
  import loading from './loading'
  import getComments from './getComments'

  export default {
    name: "comments",
    data() {
      return {
        hasComment: true,
      }
    },

    components: {
      comment,
      loading,
      'get-comments': getComments,
    },

    computed: {
      likes: function() {
        return this.caption.likes || ''
      }
    },

    methods: {
      changeState: function(event) {
        this.$emit('state', event)
      },
    },

    created: function() {
        this.hasComment =  (this.comments.length !== 0)
    },

    props: {
      comments: Array,
      caption: Object,
      user: String,
      send: Function,
    }
  }
</script>

<style scoped>
  .my-caption {
    text-align: center;
    width: 300px;
    margin: 0 auto 15px auto;
    color: #252a3e;
    font-size: 11px;
    font-family: sans-serif;
    background-color: rgba(91, 83, 84, 0.14);
    border-radius: 4px;
    box-shadow: 0 1px 1px rgba(0, 0, 0, .15);
  }
  .bigger {
    font-size: 12px;
  }
  #like {
    color: #FC3939;
  }
  .comments {
    width: 320px;
    height: 320px;
    margin: 10px auto;
    overflow: auto;
    box-shadow: 0 1px 1px rgba(0,0,0, .3);
  }
  .comments::-webkit-scrollbar-track
  {
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
    border-radius: 1px;
    width: 5px;
    background-color: #F5F5F5;
  }
  .comments::-webkit-scrollbar
  {
    width: 4px;
    background-color: #fefefe;
  }
  .comments::-webkit-scrollbar-thumb
  {
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
    background-color: #252a3e;
  }
</style>
